import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render } from "@testing-library/react";
import AddLoanView from "../../../views/loans/add-loans-view";
import { RenderWithRouterMatch } from "../../../utils/test-utils";

let matchMedia;

describe("Add Loans Tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("Add Loans page should render", () => {
    const { getByText } = render(
      <RenderWithRouterMatch>
        <AddLoanView />
      </RenderWithRouterMatch>
    );
    expect(getByText("Close")).toBeInTheDocument();
  });
});
