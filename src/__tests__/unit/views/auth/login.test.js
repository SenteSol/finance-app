import React from "react";
import * as reactRedux from "react-redux";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginView from "../../../../views/auth/login/login-view";
import { RenderWithRouterMatch } from "../../../test-utils";
import { user } from "../../../__fixtures__/user";

describe("Login Tests", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  test("If email and password are entered", async () => {
    const { getByText } = render(
      <RenderWithRouterMatch>
        <LoginView />
      </RenderWithRouterMatch>
    );

    expect(screen.getByRole("button", { name: /LogIn/i })).toBeEnabled();
    const email = screen.getByLabelText("Email Address");
    const password = screen.getByLabelText("Password");
    fireEvent.change(email, { target: { value: user.email } });
    fireEvent.change(password, { target: { value: user.password } });
    const button = screen.getByRole("button", { name: "LogIn" });
    fireEvent.click(button);
    useSelectorMock.mockReturnValue({ authentication: { isAuthenticated: true, error: [] } });
    await waitFor(() => getByText(/Dashboard/i));
  });
});
