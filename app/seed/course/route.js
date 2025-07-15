import sql from "../../config/db"
import { courses, tags, courseTagMapper } from "../../lib/courseData.js";
import { saveImageFromUrl } from "../../lib/utils.js";
import { createClient } from 'pexels';

const client = createClient('PwaAeexNNEPfN4PhECaOwwDi39urbzo6VklPZxCwbZ4miPz2SfvwBNDm');

const seedCourses = async (page, perPage) => {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS courses (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            thumbnail VARCHAR(255),
            price INT NOT NULL DEFAULT 0,
            discounted_price INT NOT NULL DEFAULT 0 
        );
    `;

    let start = (page - 1) * perPage;
    let end = start + perPage;
    let coursesList = courses.slice(start, end);
    if(!coursesList.length){
        return 'No Course Data for the selected page';
    }

    const insertedCourses = await Promise.all(
        coursesList.map(async (course) => {
            let courseTag = courseTagMapper.find((ele)=> { return ele.course_id == course.id });
            let tag = tags.find((ele) => { return ele.id == courseTag.tag_id});
            console.log(tag);
            
            let thumbnail = "";
            await client.photos.search({ query: tag.tag_name, orientation: "landscape", per_page: 1 }).then(photos => {
                saveImageFromUrl(photos.photos[0]?.src.original, `/PROJECTS/course-listing/public/thumbnails/${course.id}.jpg`)
                thumbnail = `thumbnails/${course.id}.jpg`;
            });

            return sql`
                INSERT INTO courses (id, title, description, thumbnail, price, discounted_price)
                VALUES (${course.id}, ${course.title}, ${course.description}, ${thumbnail}, ${course.price}, ${course.discounted_price})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );
    return "Database seeded successfully";
}

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') ?? 1;
    const perPage = 10;
    try{
        let msg = await seedCourses(page, perPage);
        return Response.json({ message: msg });
    } catch (error) {
        return Response.json({error}, {status: 500});
    }
}