import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import LoginView from "../../../views/auth/login/login-view";
import { RenderWithRouterMatch } from "../../../utils/test-utils";

describe("Login Tests", () => {
  test("If email and password are entered", () => {
    render(
      <RenderWithRouterMatch>
        <LoginView />
      </RenderWithRouterMatch>
    );

    // userEvent.type(screen.getAllByLabelText(/email address/i), "test@gmail.com");
    // userEvent.type(screen.getAllByLabelText(/Password/i), "P@SSw0rd");
    expect(screen.getByRole("button", { name: /LogIn/i })).toBeEnabled();
  });
});
