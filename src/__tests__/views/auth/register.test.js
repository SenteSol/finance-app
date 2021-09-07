import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import RegisterView from "../../../views/auth/registration";
import { RenderWithRouterMatch } from "../../../utils/test-utils";

describe("Registration Tests", () => {
  test("If email and password are entered", () => {
    render(
      <RenderWithRouterMatch>
        <RegisterView />
      </RenderWithRouterMatch>
    );

    // userEvent.type(screen.getAllByLabelText(/email address/i), "test@gmail.com");
    // userEvent.type(screen.getAllByLabelText(/Password/i), "P@SSw0rd");
    expect(screen.getByRole("button", { name: /Sign Up/i })).toBeEnabled();
  });
});
