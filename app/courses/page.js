import { Suspense } from 'react';
import CourseList from '../Components/ui/CourseList'
import { fetchTotalCourses, tags as fetchTags } from "../lib/data";
import Pagination from "../Components/Pagination";
import { COURSE_TYPE } from "../lib/constants";
import { CourseListSkeleton } from "../Components/skeletons";
import Filters from "../Components/ui/Filters";
import MobileFilter from "../Components/MobileFilter";
import Search from "../Components/ui/Search";


const page = async ({ searchParams }) => {
  const params = await searchParams;
  const search = params?.search || '';
  const courseType = params?.type || COURSE_TYPE.ALL;
  const tags = params?.tags || '';

  const currentPage = Number(params?.page) || 1;
  const totalPages = await fetchTotalCourses(search, courseType, tags);
  const tagList = await fetchTags();

  return (
    <>
      <div className="mt-8 flex flex-col gap-4">
        <h1 className="text-3xl text-teal-900 font-semibold">Courses</h1>
        <Search placeholder="Search By Course Name" />
        <MobileFilter component={<Filters tagList={tagList} />} />
      </div>
      <div className="flex-1 md:flex md:flex-row pt-4">
        <div className="hidden md:border-r-2 md:border-gray-300 md:block md:w-1/6">
          <Filters tagList={tagList} />
        </div>
        <div className="md:w-5/6">
          <Suspense key={search + currentPage} fallback={<CourseListSkeleton />}>
            <CourseList search={search} courseType={courseType} tags={tags} currentPage={currentPage} />
          </Suspense>
          <div className="my-12 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </>
  )
}

export default page