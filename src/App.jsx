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
            <Colorselector onColorChange={handleBackgroundColorChange} />{" "}
          </div>
          <div className="mt-6">
            <Button
              color="purple"
              name="Purple"
              onClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="red"
              name="Red"
              onClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="yellow"
              name="Yellow"
              onClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="orange"
              name="Orange"
              onClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="blue"
              name="Blue"
              onClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="teal"
              name="Teal"
              onClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="pink"
              name="Pink"
              onClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="cyan"
              name="Cyan"
              onClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="indigo"
              name="Indigo"
              onClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="brown"
              name="Brown"
              onClick={handleBackgroundColorChange}
            />
          </div>
          <div className="mt-6">
            <Button
              color="gray"
              name="Gray"
              onClick={handleBackgroundColorChange}
            />
          </div>
        </div>
        <div>
          <div class="bg-stone-50 text-center pt-4" >
          <h4>Background Color Picker</h4>
          </div>
       
        </div>
      </div>
    </>
  );
}

export default App;
