import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { v4 as uuid } from "uuid";

const Nav = ({ colors }) => {
  return (
    <ul className="Nav-list">
      {colors.map((color, i) => {
        return (
          <li className="Nav-item" key={uuid()}>
            <NavLink exact to={`/colors/${color}`}>
              {color}
            </NavLink>
          </li>
        );
      })}
      <li className="Nav-item" key={0}>
        <NavLink exact to="/colors">
          home
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
