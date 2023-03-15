import React from "react";
import { render } from "@testing-library/react";
import { Loader } from "./index";

describe("Loader component", () => {
  it("renders a loading message", () => {
    const { getByText } = render(<Loader />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
