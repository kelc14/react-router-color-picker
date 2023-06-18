import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom/cjs/react-router-dom.min";
import App from "./App";

// full render
it("mounts without crashing", function () {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});

/** ROUTE:   /colors
 *
 *  testing: loads to <ColorFactory/> */
it("/colors => loads to colorfactory", function () {
  const { getByText, getByLabelText, queryByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const welcome = getByText("Welcome to the Color Factory.");
  expect(welcome).toBeInTheDocument();
});

/** ROUTE:   /colors/new
 *
 *  testing: <ColorForm/> */
it("/colors/new => can add a new color to the navbar", function () {
  const { getByText, getByLabelText, queryByText } = render(
    <MemoryRouter initialEntries={["/colors/new"]}>
      <App />
    </MemoryRouter>
  );
  const addBtn = getByText("ADD");
  expect(addBtn).toBeInTheDocument();

  const colorInput = getByLabelText("PICK A COLOR:");
  expect(colorInput).toBeInTheDocument();

  fireEvent.change(colorInput, { target: { value: "Green" } });
  fireEvent.click(addBtn);

  // // new color added to nav!
  expect(queryByText("Green")).toBeInTheDocument();
});

/** ROUTE:   /colors/aqua
 *
 *  testing: loads to <ColorDetail color={aqua}/> */
it("/colors/aqua => loads to aqua page", function () {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/colors/aqua"]}>
      <App />
    </MemoryRouter>
  );
  const welcomeToAqua = getByText("Welcome to the Aqua page.");
  expect(welcomeToAqua).toBeInTheDocument();
});

/** ROUTE:   /colors/nope
 *
 *  testing: redirects */
it("/colors/nope => redirects to /colors", function () {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/colors/nope"]}>
      <App />
    </MemoryRouter>
  );
  const welcome = getByText("Welcome to the Color Factory.");
  expect(welcome).toBeInTheDocument();
});

/** ROUTE:   /invalid-route
 *
 *  testing: redirects */
it("/invalid-route => redirects to /colors", function () {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/invalid-route"]}>
      <App />
    </MemoryRouter>
  );
  const welcome = getByText("Welcome to the Color Factory.");
  expect(welcome).toBeInTheDocument();
});
