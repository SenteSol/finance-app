import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GetPaymentsView from "../../../views/payments/get-payments-view/get-payments-view";
import { RenderWithRouterMatch } from "../../../utils/test-utils";

let matchMedia;

describe("Get Payments Tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("Get Payments page should render", async () => {
    const { getByText } = render(
      <RenderWithRouterMatch>
        <GetPaymentsView match={{ params: { id: "test" } }} />
      </RenderWithRouterMatch>
    );
    expect(getByText("Add Payment")).toBeInTheDocument();
  });
});
