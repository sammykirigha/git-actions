import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders I love devops paragraphElement", () => {
  render(<App />);
  const paragraphElement = screen.getByText(/I love devops/i);
  expect(paragraphElement).toBeInTheDocument();
});
