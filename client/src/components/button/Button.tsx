import React from "react";
import { IButton } from "../../utils/types";

const Button = ({ label, width, type = "submit", onClick }: IButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` ${width} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
    >
      {label}
    </button>
  );
};

export default Button;
