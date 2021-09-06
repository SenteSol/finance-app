import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render, screen } from "@testing-library/react";
import ClientsView from "../../../views/clients/get-clients-view/get-clients-view";
import { RenderWithRouterMatch } from "../../../utils/test-utils";

let matchMedia;

describe("Get clients Tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("View Clients page should render", () => {
    render(
      <RenderWithRouterMatch>
        <ClientsView />
      </RenderWithRouterMatch>
    );
    expect(screen.getByText("Add Client")).toBeTruthy();
  });
});
