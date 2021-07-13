import React from "react";
import "../sass/Button.scss";

const Button = ({ children, handleClick }) => {
  let operators = ["x", "-", "+", "/"];

  return (
    <div
      className={`button__wrapper ${
        operators.includes(children) ? "button__operators" : ""
      }`}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
};

export default Button;
