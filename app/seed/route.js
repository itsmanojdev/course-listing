import sql from "../config/db.js"
import { tags, courseTagMapper } from "../lib/courseData.js";
// import { courses, tags, courseTagMapper } from "../lib/courseData.js";

// import { saveImageFromUrl } from "../lib/utils.js";
// import { createClient } from 'pexels';

// const client = createClient('PwaAeexNNEPfN4PhECaOwwDi39urbzo6VklPZxCwbZ4miPz2SfvwBNDm');

// const seedCourses = async () => {
//     await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     await sql`
//         CREATE TABLE IF NOT EXISTS courses (
//             id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//             title VARCHAR(255) NOT NULL,
//             description TEXT NOT NULL,
//             thumbnail VARCHAR(255),
//             price INT NOT NULL DEFAULT 0,
//             discounted_price INT NOT NULL DEFAULT 0 
//         );
//     `;
        
//     const insertedCourses = await Promise.all(
//         courses.map(async (course) => {
//             let courseTag = courseTagMapper.find((ele)=> { return ele.course_id == course.id });
//             let tag = tags.find((ele) => { return ele.id == courseTag.tag_id});
            
//             let thumbnail = "";
//             // await client.photos.search({ query: tag.tag_name, orientation: "landscape", per_page: 1 }).then(photos => {
//             //     saveImageFromUrl(photos.photos[0]?.src.original, `/PROJECTS/course-listing/public/thumbnails/${course.id}.jpg`)
//             //     thumbnail = photos.photos[0]?.src.original;
//             // });

//             return sql`
//                 INSERT INTO courses (id, title, description, thumbnail, price, discounted_price)
//                 VALUES (${course.id}, ${course.title}, ${course.description}, ${thumbnail}, ${course.price}, ${course.discounted_price})
//                 ON CONFLICT (id) DO NOTHING;
//             `;
//         }),
//     );
    
//     return insertedCourses;
// }

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
        // await seedCourses();
        await seedTags();
        await seedCourseTagMapper();
        
        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        return Response.json({error}, {status: 500});
    }
}