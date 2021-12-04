import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddPaymentsView from "../../../../views/payments/add-payments-view";
import { RenderWithRouterMatch } from "../../../test-utils";

let matchMedia;

describe("Add Payments Tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("Add Payments page should render", async () => {
    const { getByText } = render(
      <RenderWithRouterMatch>
        <AddPaymentsView match={{ params: { id: "test" } }} />
      </RenderWithRouterMatch>
    );
    expect(getByText("Go Back")).toBeInTheDocument();
  });
});
