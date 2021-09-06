import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render } from "@testing-library/react";
import EditClientView from "../../../views/clients/edit-client-view/edit-client-view";
import { RenderWithRouterMatch } from "../../../utils/test-utils";

let matchMedia;

describe("Edit Client Tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("Edit Clients page should render", () => {
    const { getByText } = render(
      <RenderWithRouterMatch>
        <EditClientView match={{ params: { id: "test" } }} />
      </RenderWithRouterMatch>
    );
    expect(getByText("Close")).toBeInTheDocument();
  });
});
