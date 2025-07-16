import { courses } from "../../lib/data";
import CourseCard from "../CourseCard";

const CourseList = async () => {
    let courseList = await courses();
    
    
    return (
        <div className="grid gap-4 grid-cols-1 md:pl-8 md:grid-cols-2 lg:grid-cols-3">
            {courseList.map((course) => {
                return (
                    <CourseCard key={course.id} course={course} />
                );
            })}
        </div>
    )
}

export default CourseList