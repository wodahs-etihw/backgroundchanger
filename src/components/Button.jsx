import React from "react";
import { useState } from "react";

function Button({ color, onButtonClick, name, colorChanger }) {
  // Define default and hover colors based on the provided color prop
  console.log(color, onButtonClick, name);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("Mouse entered");
    // Add any other functionality you want to perform on mouse enter
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("Mouse left");
    // Add any other functionality you want to perform on mouse leave
  };



  let handleClick = () => {
    console.log(color, onButtonClick, name);
    onButtonClick(color);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      class="uppercase  py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      {name}
    </button>
  );
}

export default Button;
