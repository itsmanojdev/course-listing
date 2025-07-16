

const Filters = () => {
  return (
    <div className="h-full">
        <h2 className="text-lg font-semibold">Filters</h2>
        <div>
            <h3 className="text-base text-gray-700">Course Type</h3>
            <input type="radio" id="course-type" name="type-free" value="free"/>
            <label htmlFor="type-free">Free</label>

            <input type="radio" id="course-type" name="type-paid" value="paid"/>
            <label htmlFor="type-paid">Paid</label>
        </div>

        <div>
            <h3 className="text-base text-gray-700">Tags</h3>
            <input type="checkbox" id="tag" name="tag" value="algebra"/>
            <label htmlFor="tag">Algebra</label>
        </div>
    </div>
  )
}

export default Filters