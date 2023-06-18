import React from "react";
import "./ColorFactory.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const ColorFactory = () => {
  return (
    <div className="ColorFactory">
      <h1 className="ColorFactory-heading">Welcome to the Color Factory.</h1>
      <Link to="/colors/new">Add a New Color</Link>
    </div>
  );
};

export default ColorFactory;
