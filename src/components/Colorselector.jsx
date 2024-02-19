import React from "react";
import { useState } from "react";

function Colorselector({ onColorChange }) {
  const [selectedColor, setSelectedColor] = useState("#2563eb");

  const handleColorChange = (e) => {
    console.log(e.target.value);
    setSelectedColor(e.target.value);
    onColorChange(e.target.value);
  };

  return (
    <>
      {/* <label
        for="hs-color-input"
        class="block text-sm font-medium mb-2 dark:text-white"
      >
        Color picker
      </label> */}
      <input
        type="color"
        class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700"
        id="hs-color-input"
        value={selectedColor}
        title="Choose your color"
        onChange={handleColorChange}
      ></input>
    </>
  );
}

export default Colorselector;
