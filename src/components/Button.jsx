import React from "react";

const Button = ({ handleClick, name, className }) => {
  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
