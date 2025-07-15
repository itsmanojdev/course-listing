import sql from "../config/db.js"
import { tags, courseTagMapper } from "../lib/courseData.js";

const seedTags = async () => {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS tags (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT 
        );
    `;

    const insertedTags = await Promise.all(
        tags.map((tag) => {
            return sql`
                INSERT INTO tags (id, name) 
                VALUES (${tag.id}, ${tag.tag_name})
                ON CONFLICT (id) DO NOTHING;
            `;
})
    );
    return insertedTags;
}

const seedCourseTagMapper = async () => {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS courseTagMapper (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            course_id UUID NOT NULL,
            tag_id UUID NOT NULL,
            FOREIGN KEY (course_id) REFERENCES courses(id),
            FOREIGN KEY (tag_id) REFERENCES tags(id)
        );
    `;

    const insertedCourseTags = await Promise.all(
        courseTagMapper.map(async (courseTag) => {
            let check = await sql`
                SELECT id FROM courseTagMapper 
                WHERE course_id = ${courseTag.course_id} 
                AND tag_id = ${courseTag.tag_id};
            `;
            
            if(!check.length){
                return sql`
                    INSERT INTO courseTagMapper (course_id, tag_id) 
                    VALUES (${courseTag.course_id}, ${courseTag.tag_id});
                `;
            }
            return ``;
        })
    );
    return insertedCourseTags;
}

export async function GET() {
    try{
        await seedTags();
        await seedCourseTagMapper();
        
        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        return Response.json({error}, {status: 500});
    }
}