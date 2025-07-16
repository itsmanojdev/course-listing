import FormField from "../FormField"
import { tags } from "../../lib/data";

const Filters = async () => {
  let tagList = await tags();
  return (
    <div className="h-dvh flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <div>
            <h3 className="text-base text-gray-600 pb-2">Course Type</h3>
            <div className="flex flex-col gap-2">
              <FormField type="radio" name="course-type" label="Free" />
              <FormField type="radio" name="course-type" label="Paid" />
            </div>
        </div>
        {tagList && 
          <div>
            <h3 className="text-base text-gray-600 pb-2">Tags</h3>
            <div className="flex flex-col gap-2 h-100 overflow-y-auto">
              {tagList.map((tag) => <FormField type="checkbox" label={tag.name} name={tag.name} value={tag.id}/>)}
            </div>
            
          </div>
        }
        
    </div>
  )
}

export default Filters