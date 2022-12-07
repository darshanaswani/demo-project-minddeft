import React from "react";
import { useNavigate } from "react-router-dom";
import "./Back.styles.css";

const Back = () => {
  const Navigate = useNavigate();

  const clickHandler = () => {
    return Navigate("/");
  };
  return (
    <button className="back" onClick={clickHandler}>
      <i className="fa-sharp fa-solid fa-arrow-left"></i>
    </button>
  );
};

export default Back;
