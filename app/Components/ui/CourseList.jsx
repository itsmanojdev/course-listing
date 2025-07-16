import { courses } from "../../lib/data";
import CourseCard from "../CourseCard";

const CourseList = async () => {
    let courseList = await courses();
    
    return (
        <div className="h-dvh grid gap-4 grid-cols-1 md:pl-8 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto">
            {courseList.map((course) => {
                return (
                    <CourseCard key={course.id} course={course} />
                );
            })}
        </div>
    )
}

export default CourseList