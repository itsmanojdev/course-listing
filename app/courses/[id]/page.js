import React from 'react'

const page = async ({ params }) => {
    const { id } = await params;
    return (
        <div className='flex px-8'>
            <div className='w-1/3'>
                <div className="w-full h-40 xl:h-50">
                    <Image src={course.thumbnail ? `/${course.thumbnail}` : '/course-placeholder.jpeg'} alt={course.title} width={340} height={230} className="size-full object-cover rounded-md" />
                </div>
            </div>
            <div className='w-2/3'>

            </div>
        </div>
    )
}

export default page