import sql from '../config/db'
import { COURSE_TYPE } from "./constants";

const ITEMS_PER_PAGE = 10;

const generateConditionStr = (courseType, tags) => {
    let typeCondition = null;
    switch (courseType) {
        case COURSE_TYPE.FREE:
            console.log("free");
            typeCondition = sql`AND C.price = 0`;
            break;
        case COURSE_TYPE.PAID:
            console.log("paid");
            typeCondition = sql`AND C.price != 0`;
            break;
        case COURSE_TYPE.DISCOUNT:
            console.log("discount");
            typeCondition = sql`AND C.price != 0 AND C.discounted_price != 0`;
            break;
        default:
            console.log("default");

            break;
    }

    let tagCondition = null;
    if (tags.length > 0) {
        tagCondition = sql`AND T.id IN ${sql(tags.split(","))}`;
    }

    return [typeCondition, tagCondition];
}

export const courses = async (search = "", courseType = "", tags = "", currentPage = 1) => {
    courseType = courseType.toLowerCase();
    let [typeCondition, tagCondition] = generateConditionStr(courseType, tags);

    try {
        const data = await sql`
            SELECT C.*, array_agg(T.name) as tags FROM courses as C
            INNER JOIN coursetagmapper as CTM ON CTM.course_id = C.id
            INNER JOIN tags as T ON T.id = CTM.tag_id 
            WHERE C.title ILIKE ${`%${search}%`} 
            ${typeCondition ?? sql``} 
            ${tagCondition ?? sql``}
            GROUP BY C.id
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${(currentPage - 1) * ITEMS_PER_PAGE};
        `;

        return data;
    } catch (error) {
        console.log("Error While Fetching Course List: ", error);
        throw new Error('Failed to fetch course list.');
    }

}

export const fetchTotalCourses = async (search = "", courseType = "", tags = "") => {
    courseType = courseType.toLowerCase();
    let [typeCondition, tagCondition] = generateConditionStr(courseType, tags);

    try {
        const data = await sql`
            SELECT COUNT(id) FROM (
                SELECT C.*, array_agg(T.name) as tags FROM courses as C
                INNER JOIN coursetagmapper as CTM ON CTM.course_id = C.id
                INNER JOIN tags as T ON T.id = CTM.tag_id 
                WHERE C.title ILIKE ${`%${search}%`} 
                ${typeCondition ?? sql``} 
                ${tagCondition ?? sql``}
                GROUP BY C.id
            )
        `
        console.log("TP data:", data);

        const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
        console.log("TP: ", totalPages);

        return totalPages;
    } catch (error) {
        console.log("Error While Fetching No of Courses: ", error);
        throw new Error('Failed to fetch no of courses.');
    }
}

export const tags = async () => {
    try {
        let tags = await sql`SELECT * FROM tags`;

        return tags;
    } catch (error) {
        console.log("Error While Fetching Tag List: ", error);
        throw new Error('Failed to fetch Tag list.');
    }
}

export const fetchCourseByID = async (id) => {
    try {
        let course = await sql`
            SELECT C.*, array_agg(T.name) as tags FROM courses as C
            INNER JOIN coursetagmapper as CTM ON CTM.course_id = C.id
            INNER JOIN tags as T ON T.id = CTM.tag_id 
            WHERE C.id = ${id}
            GROUP BY C.id LIMIT 1;`;

        return course[0];
    } catch (error) {
        console.log("Error While Fetching Course Details: ", error);
        throw new Error('Failed to fetch course details.');
    }
}