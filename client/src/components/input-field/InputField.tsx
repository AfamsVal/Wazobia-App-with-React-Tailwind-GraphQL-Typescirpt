import React from "react";
import { IInputField } from "../../utils/types";

const InputField = ({
  boxWidth,
  label,
  placeholder,
  type,
  errorMsg,
  children,
}: IInputField) => {
  return (
    <div className={`${boxWidth}`}>
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-50 text-gray-900 border border-gray-3 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
        id="grid-password"
        type={type}
        placeholder={placeholder}
      />
      {children ? children : ""}
      <p className="text-red-500 text-xs italic">{errorMsg}</p>
    </div>
  );
};

export default InputField;
