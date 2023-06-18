import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom";
import { v4 as uuid } from "uuid";

import ColorFactory from "./ColorFactory";
import ColorDetail from "./ColorDetail";
import ColorForm from "./ColorForm";
import Nav from "./Nav";

function App() {
  const [colors, setColors] = useState(() => ["Aqua"]);

  const addColor = (newColor) => {
    setColors(() => {
      let newColors = [newColor, ...colors];
      return newColors;
    });
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors/new">
          <ColorForm addColor={addColor} />
        </Route>
        {colors.map((color) => (
          <Route exact path={`/colors/${color}`} key={uuid()}>
            <ColorDetail color={color} key={uuid()} />
          </Route>
        ))}
        <Route exact path="/colors">
          <ColorFactory />
        </Route>
        <Redirect to="/colors" />
      </Switch>
      <Nav colors={colors} />
    </div>
  );
}

export default App;
