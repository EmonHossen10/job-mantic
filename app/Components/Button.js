import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const Button = ({ children }) => {
  return (
    <div>
      <button className="flex items-center text-sm md:text-base gap-2 px-4 py-2 bg-black text-white rounded-full">
        {children ? children : "Get Started - It's Free"}
        <IoIosArrowDropright
          className="bg-white text-black rounded-full "
          size={24}
        />
      </button>
    </div>
  );
};

export default Button;
