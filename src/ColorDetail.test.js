import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom/cjs/react-router-dom.min";
import ColorDetail from "./ColorDetail";

// full render
it("mounts without crashing", function () {
  const { getByText } = render(
    <MemoryRouter>
      <ColorDetail color="Red" />
    </MemoryRouter>
  );

  // check that colors are in the nav
  const welcomeToRed = getByText("Welcome to the Red page.");
  expect(welcomeToRed).toBeInTheDocument();
});
