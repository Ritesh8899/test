import React, { useState } from "react";

const App = () => {
  const green = "#09af17";
  const [bg, setBg] = useState(green);
  const [name, setName] = useState("Click me");

  const bgChange = () => {
    let newBG = "yellow";
    setBg(newBG);
    setName("Ouch!!");
  };

  const bgBack = () => {
    setBg(green);
    setName("Hallo!!");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onMouseEnter={bgChange} onDoubleClick={bgBack}>
          {name}
        </button>
      </div>
    </>
  );
};

export default App;
