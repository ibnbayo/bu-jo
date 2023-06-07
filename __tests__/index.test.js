import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act } from "@testing-library/react";

describe("Todo App", () => {
  it("renders the todo app", () => {
    render(<Home />);
  
    const input = screen.getByRole('textbox');
    
  });

});