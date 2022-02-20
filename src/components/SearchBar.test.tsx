import {FormEventHandler} from 'react';
import {render, fireEvent, screen} from "@testing-library/react";
import SearchBar from "./SearchBar";

test("submit search", () => {
  const onSubmit = jest.fn(e => e.preventDefault());
  render(<SearchBar onSubmit={onSubmit} />);
  const input = screen.getByRole("textbox")
  const button = screen.getByText("Submit");
  fireEvent.change(input, {target: {value: "test"}})
  fireEvent.click(button);
  expect(onSubmit).toBeCalled();
})

export {}
