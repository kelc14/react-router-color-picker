import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import colorNames from "./colors";
import "./ColorForm.css";
import { v4 as uuid } from "uuid";

const ColorForm = ({ addColor }) => {
  const [color, setColor] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
    history.push("/");
  };

  return (
    <div className="ColorForm-container">
      <form className="ColorForm-form" onSubmit={handleSubmit}>
        <label htmlFor="color" className="ColorForm-label">
          PICK A COLOR:
        </label>

        <select
          name="color"
          id="color"
          className="ColorForm-select"
          onChange={(e) => setColor(e.target.value)}
        >
          {colorNames.map((c) => (
            <option value={`${c}`} key={uuid()}>
              {c}
            </option>
          ))}
        </select>
        <button className="ColorForm-btn">ADD</button>
      </form>
    </div>
  );
};

export default ColorForm;
