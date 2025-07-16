'use client';

const FormField = ({type, name="", label="", value, placeholder = ""}) => {
  switch (type) {
    case "text":
      return (
        <>
          {label && <label className="block">{label}</label>}
          <input 
              className="w-full bg-gray-50 border border-gray-400 px-2 py-2 mt-1 rounded-md outline-none focus:ring focus:ring-teal-500 focus:border-teal-500 animate placeholder:text-gray-500"
              placeholder={placeholder}
          />
        </>
      )

    case "radio":
      return (
        <>
          <div className="flex">
              <input type="radio" id={value ?? label} name={name} value={value ?? label} className="checked:bg-teal-500"/>
              <label htmlFor={value ?? label} className="pl-2">{label}</label>
            </div>
        </>
      )
    
    case "checkbox":
      return (
        <>
          <div className="flex">
              <input type="checkbox" id={value ?? label} name={name} value={value ?? label} className="checked:bg-teal-500"/>
              <label htmlFor={value ?? label} className="pl-2">{label}</label>
            </div>
        </>
      )
  
    default:
      return;
  }
}

export default FormField