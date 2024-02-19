import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Colorselector from "./components/Colorselector";

function App() {
  const [color, setColor] = useState("black");

  const handleBackgroundColorChange = (newColor) => {
    setColor(newColor);
  };


  return (
    <>
      <div
        class="h-screen flex flex-col-reverse"
        style={{ backgroundColor: color }}
      >
        
        <div class="w-full bg-stone-50 flex flex-row justify-around ">
          <div class="mt-6">
            <Colorselector clickedValue={color} onColorChange={handleBackgroundColorChange} />
          </div>

          <div className="mt-6">
            <Button
              color="#800080"
              name="purple"
              onButtonClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="#FF0000"
              name="red"
              onButtonClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="#FFFF00"
              name="yellow"
              onButtonClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="#FFA500"
              name="orange"
              onButtonClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="#0000FF"
              name="Blue"
              onButtonClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="#008080"
              name="Teal"
              onButtonClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="#FFC0CB"
              name="Pink"
              onButtonClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="#00FFFF"
              name="Cyan"
              onButtonClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="#4B0082"
              name="Indigo"
              onButtonClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="#A52A2A"
              name="Brown"
              onButtonClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="#808080"
              name="Gray"
              onButtonClick={handleBackgroundColorChange}
            />
          </div>
        </div>
        <div>
          <div class="bg-stone-50 text-center pt-4" >
          <h4 class="uppercase font-bold" >Background Color Picker</h4>
          </div>
       
        </div>
      </div>
    </>
  );
}

export default App;
