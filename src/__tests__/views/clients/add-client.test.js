import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render } from "@testing-library/react";
import AddClientsView from "../../../views/clients/add-client-view";
import { RenderWithRouterMatch } from "../../../utils/test-utils";

let matchMedia;

describe("Add Clients Tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("Add Clients page should render", () => {
    const { getByText } = render(
      <RenderWithRouterMatch>
        <AddClientsView />
      </RenderWithRouterMatch>
    );
    expect(getByText("Close")).toBeInTheDocument();
  });
});
