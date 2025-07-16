import FormField from "../Components/FormField";
import Filters from "../Components/ui/Filters";
import MobileFilter from "../Components/MobileFilter";

const Layout = ({children}) => {
  return (
    <>
        <div className="mt-4 flex flex-col gap-4">
            <h1 className="text-3xl text-teal-900 font-semibold">Courses</h1>
            <FormField type="text" placeholder="Search By Course Name"/>
            <MobileFilter component={<Filters />}/>
        </div>
        <div className="flex-1 flex flex-row pt-4">
            <div className="hidden md:border-r-2 md:border-gray-300 md:block md:w-1/6">
                <Filters />
            </div>
            <div className="md:w-5/6">
                {children}
            </div>
        </div>
    </>
  )
}

export default Layout