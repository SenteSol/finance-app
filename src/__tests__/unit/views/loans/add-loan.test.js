import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AddLoanView from "../../../../views/loans/add-loans-view";
import { RenderWithRouterMatch } from "../../../test-utils";
import { loans } from "../../../__fixtures__/loans";

let matchMedia;

describe("Add Loans Tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("Add Loans page should render", async () => {
    const { getByText } = render(
      <RenderWithRouterMatch>
        <AddLoanView />
      </RenderWithRouterMatch>
    );
    expect(getByText("Close")).toBeInTheDocument();
    const datePicker = screen.getByLabelText("Date picker dialog");
    const rate = screen.getByLabelText("Rate");
    const amount = screen.getByLabelText("Amount");
    const comment = screen.getByLabelText("Comment");
    fireEvent.change(datePicker, { target: { value: loans.date } });
    fireEvent.change(rate, { target: { value: loans.rate } });
    fireEvent.change(amount, { target: { value: loans.amount } });
    fireEvent.change(comment, { target: { value: loans.comment } });
    const saveButton = screen.getByRole("button", { name: "Save" });
    const closeButton = screen.getByRole("button", { name: "Close" });
    fireEvent.click(saveButton);
    fireEvent.click(closeButton);
    await waitFor(() => getByText(/Dashboard/i));
  });
});
