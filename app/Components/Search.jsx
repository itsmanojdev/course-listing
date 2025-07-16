'use client';

const Search = ({label="", placeholder = ""}) => {
  return (
    <>
        {label && <label className="block">{label}</label>}
        <input 
            className="w-full bg-gray-50 border border-gray-400 px-2 py-2 mt-1 rounded-md outline-none focus:ring focus:ring-teal-500 focus:border-teal-500 animate placeholder:text-gray-500"
            placeholder={placeholder}
        />
    </>
  )
}

export default Search