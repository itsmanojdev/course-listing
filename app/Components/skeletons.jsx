export const CourseCardSkeleton = () => {
    return (
        <div className="bg-white flex flex-col gap-2 shadow-md rounded-sm p-4 animate-pulse">
            <div className="w-full h-40 xl:h-50 bg-gray-200 rounded-md" />

            <div className="h-6 bg-gray-200 rounded w-3/4 mt-2" />

            <div className="flex items-center gap-4 mt-2">
                <div className="h-6 w-16 bg-gray-200 rounded" />
                <div className="h-5 w-10 bg-gray-300 rounded" />
            </div>

            <div className="flex gap-2 mt-2">
                <div className="h-6 w-16 bg-gray-200 rounded-full" />
                <div className="h-6 w-20 bg-gray-200 rounded-full" />
            </div>
        </div>
    );
}


export const CourseListSkeleton = () => {
    return (
        <div className="h-dvh grid gap-4 grid-cols-1 md:pl-8 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto">
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
        </div>
    )
}

