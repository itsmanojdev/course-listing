'use client';

import clsx from "clsx";

const defaultFunction = () => console.log('No Handle Function');

const FormField = ({ type, name = "", label = "", value, placeholder = "", defaultValue = "", isDisabled = false, isSelected = false, handleFunction = defaultFunction }) => {
  const handleChange = (term) => {
    handleFunction(term);
  };

  switch (type) {
    case "text":
      return (
        <>
          {label &&
            <label
              className={clsx("block",
                {
                  "text-gray-500": isDisabled
                })}
            >
              {label}
            </label>
          }
          <input
            className="w-full bg-gray-50 border border-gray-400 px-2 py-2 mt-1 rounded-md outline-none focus:ring focus:ring-teal-500 focus:border-teal-500 animate placeholder:text-gray-500"
            placeholder={placeholder}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            defaultValue={defaultValue}
            disabled={isDisabled}
          />
        </>
      )

    case "radio":
      return (
        <>
          <div className="flex">
            <input
              type="radio"
              id={value ?? label}
              name={name}
              value={value ?? label}
              className="checked:bg-teal-600"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              disabled={isDisabled}
              checked={isSelected}
            />
            <label htmlFor={value ?? label}
              className={clsx("pl-2",
                {
                  "text-gray-500": isDisabled
                })}
            >
              {label}
            </label>
          </div>
        </>
      )

    case "checkbox":
      return (
        <>
          <div className="flex">
            <input
              type="checkbox"
              id={value ?? label}
              name={name}
              value={value ?? label}
              className="checked:bg-teal-600"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              disabled={isDisabled}
              checked={isSelected}
            />
            <label htmlFor={value ?? label}
              className={clsx("pl-2",
                {
                  "text-gray-500": isDisabled
                })}
            >
              {label}
            </label>
          </div>
        </>
      )

    default:
      return;
  }
}

export default FormField