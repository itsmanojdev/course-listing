import React from 'react'
import Image from "next/image";
import { fetchCourseByID } from "../../lib/data";
import Tag from '@/app/Components/Tag';

const page = async ({ params }) => {
    const { id } = await params;
    const course = await fetchCourseByID(id);

    return (
        <div className='h-dvh flex flex-col py-12 gap-8 md:flex-row'>
            <div className='md:w-1/3'>
                <div className="w-full h-50 xl:h-75">
                    <Image src={course.thumbnail ? `/${course.thumbnail}` : '/course-placeholder.jpeg'} alt={course.title} width={340} height={230} className="size-full object-cover rounded-md" />
                </div>
            </div>
            <div className='md:w-2/3 flex flex-col gap-4'>
                <div>
                    <h1 className='text-2xl text-teal-900 font-bold mb-2 md:text-4xl'>{course.title}</h1>
                    {course.tags &&
                        <div className="flex gap-2">
                            {course.tags.map((tag) => {
                                return (
                                    <Tag key={tag} tag={tag} />
                                )
                            })}
                        </div>
                    }
                </div>
                <div className="text-xl md:text-3xl">
                    <span className="text-teal-700 font-bold">
                        {course.discounted_price > 0 ? `₹${course.discounted_price}` : course.price === 0 ? "Free" : `₹${course.price}`}
                    </span>
                    {course.discounted_price > 0 && (
                        <span className="text-base pl-4 line-through text-gray-400">₹{course.price}</span>
                    )}
                </div>
                <p className='flex-1 overflow-y-auto'>{course.description}</p>
            </div>
        </div>
    )
}

export default page