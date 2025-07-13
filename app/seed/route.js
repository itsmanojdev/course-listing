
import { courses, tags, courseTagMapper } from "../lib/courseData";
import { saveImageFromUrl } from "../lib/utils";
import { createClient } from 'pexels';

const client = createClient('YOUR_API_KEY');

const seedCourses = () => {
    let course = course[0];
    
}

const seedTags = () => {}

const seedCourseTagMapper = () => {}

export const GET = async () => {
    saveImageFromUrl("https://images.pexels.com/photos/3573351/pexels-photo-3573351.png", "/PROJECTS/course-listing/public/thumbnails/samp.png")
    return Response.json({ message: 'Database seeded successfully' });
}
