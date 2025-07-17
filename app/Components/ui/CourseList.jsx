import { courses } from "../../lib/data";
import CourseCard from "../CourseCard";
import Link from 'next/link'

const CourseList = async ({ search, courseType, tags, currentPage }) => {
    let courseList = await courses(search, courseType, tags, currentPage);
    // let courseList = await courses();

    return (
        <>
            <div className="h-dvh grid gap-4 grid-cols-1 md:pl-8 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto">
                {courseList.map((course) => {
                    return (
                        <Link key={course.id} href={`/courses/${course.id}`}>
                            <CourseCard course={course} />
                        </Link>
                    );
                })}
            </div>
        </>
    )
}

export default CourseList