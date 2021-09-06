import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render, screen } from "@testing-library/react";
import GetLoansView from "../../../views/loans/get-loans-view/get-loans-view";
import { RenderWithRouterMatch } from "../../../utils/test-utils";

let matchMedia;

describe("Get Loan Tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("Get Loans page should render", () => {
    render(
      <RenderWithRouterMatch>
        <GetLoansView />
      </RenderWithRouterMatch>
    );
    expect(screen.getByText("Add Loan")).toBeTruthy();
  });
});
