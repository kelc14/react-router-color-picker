import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "./Nav";

const colors = ["Red", "Green", "Blue"];

// full render
it("mounts without crashing", function () {
  const { getByText } = render(
    <MemoryRouter>
      <Nav colors={colors} />
    </MemoryRouter>
  );

  // check that colors are in the nav
  const colorLink = getByText("Red");
  expect(colorLink).toBeInTheDocument();
  const colorLink2 = getByText("Green");
  expect(colorLink2).toBeInTheDocument();
  const colorLink3 = getByText("Blue");
  expect(colorLink3).toBeInTheDocument();

  // home link should also be there
  const homeLink = getByText("home");
  expect(homeLink).toBeInTheDocument();
});
