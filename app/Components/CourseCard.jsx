import Image from 'next/image'
import Tag from './Tag'

const CourseCard = ({course}) => {
  return (
    <div className="bg-white flex flex-col gap-2 shadow-md rounded-sm p-4 overflow-hidden">
        <div className="w-full h-40 xl:h-50">
            <Image src={course.thumbnail ? `/${course.thumbnail}` : '/course-placeholder.jpeg'} alt={course.title} width={340} height={230} className="size-full object-cover rounded-md"/>
        </div>
        <h3 className="text-lg font-semibold line-clamp-1">{course.title}</h3>
        <div className="text-xl">
            <span className="text-teal-700 font-bold">
                {course.discounted_price > 0 ? `₹${course.discounted_price}` : course.price === 0 ? "Free" : `₹${course.price}`}
            </span>
            {course.discounted_price > 0 && (
                <span className="text-base pl-4 line-through text-gray-400">₹{course.price}</span>
            )}
        </div>
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
  )
}

export default CourseCard