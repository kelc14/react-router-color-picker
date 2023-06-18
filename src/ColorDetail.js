import React, { useState, useEffect } from "react";
import "./ColorDetail.css";

const ColorDetail = ({ color }) => {
  const [colorName, setColorName] = useState(() => color);

  useEffect(() => {
    const newColor = () => {
      return setColorName(() => color);
    };
    newColor(color);
  }, [color]);

  return (
    <div className="ColorDetail" style={{ backgroundColor: colorName }}>
      <h1 className="ColorDetail-heading">Welcome to the {colorName} page.</h1>
    </div>
  );
};

export default ColorDetail;
