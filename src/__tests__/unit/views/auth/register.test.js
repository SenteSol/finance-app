import React from "react";
import * as reactRedux from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import RegisterView from "../../../../views/auth/registration";
import { RenderWithRouterMatch } from "../../../test-utils";
import { user } from "../../../__fixtures__/user";

describe("Registration Tests", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  test("Registers a new user", async () => {
    render(
      <RenderWithRouterMatch>
        <RegisterView />
      </RenderWithRouterMatch>
    );

    expect(screen.getByRole("button", { name: /Sign Up/i })).toBeEnabled();
    const email = screen.getByLabelText("Email Address");
    const password = screen.getByLabelText("Password");
    const firstName = screen.getByLabelText("First Name");
    const lastName = screen.getByLabelText("Last Name");
    const confirmPassword = screen.getByLabelText("Confirm Password");
    fireEvent.change(firstName, { target: { value: user.firstName } });
    fireEvent.change(lastName, { target: { value: user.lastName } });
    fireEvent.change(email, { target: { value: user.email } });
    fireEvent.change(password, { target: { value: user.password } });
    fireEvent.change(confirmPassword, { target: { value: user.confirmPassword } });
    const button = screen.getByRole("button", { name: "Sign Up" });
    fireEvent.click(button);
  });
});
