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

export const SearchSkeleton = () => {
    return (
        <div className="mt-4 flex flex-col gap-4 animate-pulse">
            <div className="h-8 w-40 bg-gray-300 rounded"></div>
            <div className="w-full h-10 bg-gray-200 rounded-md"></div>
            <div className="md:hidden">
                <div className="h-10 w-full bg-gray-300 rounded"></div>
            </div>
        </div>
    )
}

export const RadioBtnSkeleton = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gray-300"></div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>
    )
}

export const CheckBoxSkeleton = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-300 rounded-sm"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
    )
}

export const CoursesSkeleton = () => {
    return (
        <>
            <div className="mt-4 flex flex-col gap-4">
                <SearchSkeleton />
            </div>
            <div className="flex-1 flex flex-row pt-4">
                <div className="hidden md:border-r-2 md:border-gray-300 md:block md:w-1/6">
                    <div className="h-dvh flex flex-col gap-6 animate-pulse">
                        <div className="h-6 w-24 bg-gray-300 rounded"></div>
                        <div>
                            <div className="h-4 w-32 bg-gray-300 rounded mb-4"></div>
                            <div className="flex flex-col gap-4">
                                <RadioBtnSkeleton />
                                <RadioBtnSkeleton />
                                <RadioBtnSkeleton />
                                <RadioBtnSkeleton />
                            </div>
                        </div>


                        <div className="flex flex-col overflow-y-auto">
                            <div className="h-4 w-32 bg-gray-300 rounded mb-4"></div>
                            <div className="flex flex-col gap-4">
                                <CheckBoxSkeleton />
                                <CheckBoxSkeleton />
                                <CheckBoxSkeleton />
                                <CheckBoxSkeleton />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-5/6">
                    <CourseListSkeleton />
                </div>
            </div>
        </>
    )
}

