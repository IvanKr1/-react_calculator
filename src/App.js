import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import * as math from "mathjs";

const App = () => {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    if (value.length === 0) {
      if (["x", "/", ","].includes(val)) {
        return;
      }
    }

    if (val === "x") val = "*";

    setValue(value + val);
  };

  const handleEval = () => {
    setValue(math.evaluate(value));
  };

  return (
    <div className="app__container">
      <div className="app__row__container">
        <Input data={value} />
        <div className="app__row">
          <Button handleClick={handleClick}>7</Button>
          <Button handleClick={handleClick}>8</Button>
          <Button handleClick={handleClick}>9</Button>
          <Button handleClick={handleClick}>x</Button>
        </div>
        <div className="app__row">
          <Button handleClick={handleClick}>4</Button>
          <Button handleClick={handleClick}>5</Button>
          <Button handleClick={handleClick}>6</Button>
          <Button handleClick={handleClick}>-</Button>
        </div>
        <div className="app__row">
          <Button handleClick={handleClick}>1</Button>
          <Button handleClick={handleClick}>2</Button>
          <Button handleClick={handleClick}>3</Button>
          <Button handleClick={handleClick}>+</Button>
        </div>
        <div className="app__row">
          <Button handleClick={handleClick}>,</Button>
          <Button handleClick={handleClick}>0</Button>
          <Button handleClick={() => handleEval()}>=</Button>
          <Button handleClick={handleClick}>/</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
