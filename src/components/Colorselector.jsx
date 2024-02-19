import React from "react";
import { useState , useEffect ,useRef } from "react";

function Colorselector({ onColorChange , clickedValue }) {
  console.log(clickedValue);
  const [selectedColor, setSelectedColor] = useState(clickedValue);
  const inputRef = useRef(null);

  useEffect(() => {
    setSelectedColor(clickedValue); // Update the selectedColor state when clickedValue prop changes
    inputRef.current.value = clickedValue; // Reset the input value manually
  }, [clickedValue]);

  const handleColorChange = (e) => {
    console.log(e.target.value);
    const color = e.target.value;
    setSelectedColor(color);
    onColorChange(color);
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
        ref={inputRef}
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
