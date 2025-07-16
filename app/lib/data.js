import sql from '../config/db'

export const courses = async () => {
    try{
        const data = await sql`
            SELECT C.*, array_agg(T.name) as tags FROM courses as C
            INNER JOIN coursetagmapper as CTM ON CTM.course_id = C.id
            INNER JOIN tags as T ON T.id = CTM.tag_id
            GROUP BY C.id
        `
        return data;
    } catch(error) {
        console.log("Error While Fetching Course List: ", error);
        throw new Error('Failed to fetch course list.');
    }

}

export const tags = async () => {
    try{
        let tags = await sql`SELECT * FROM tags`;

        return tags;
    } catch(error) {
        console.log("Error While Fetching Tag List: ", error);
        throw new Error('Failed to fetch Tag list.');
    }
}