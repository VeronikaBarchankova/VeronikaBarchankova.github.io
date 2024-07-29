import React, { useState, useEffect } from "react";
import Keyboard from "./Keyboard.js";
import ReactDOM from "react-dom";

export default function Tester() {
  const [current, setCurrent] = useState("");
  const sourcelink = "https://codepen.io/atulkumarsingh/pen/GbLmLJ";

  const handleKeyDown = (e) => {
    const keyCode = e.code === "Space" ? "Space" : e.key;
    setCurrent(keyCode);
    const key = document.getElementById(e.code);
    console.log(key);
    console.log(e.code);
    if (key === null){
      return;
    }
    key.classList.add("confirmed");
    key.classList.add("pressed");
  };

  const handleKeyUp = (e) => {
    setCurrent("");
    const key = document.getElementById(e.code);
    if (key === null) {
      return;
    }
    key.classList.remove("pressed");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div>
      <h1 className="heading">Keyboard Tester</h1>
      <p className="current">Currently pressed: {current}</p>
      <Keyboard />
      <p className="source">Keyboard CSS <a href={sourcelink}>source</a></p>
    </div>
  );
}

ReactDOM.render(<Tester/>, document.getElementById('root'));
