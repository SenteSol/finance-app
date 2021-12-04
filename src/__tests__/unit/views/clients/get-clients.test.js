import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import ClientsView from "../../../../views/clients/get-clients-view/get-clients-view";
import { RenderWithRouterMatch } from "../../../test-utils";
import { client } from "../../../__fixtures__/client";

let matchMedia;

describe("Get clients Tests", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  afterEach(() => {
    matchMedia.clear();
  });
  test("View Clients page should render", async () => {
    const getClients = jest.fn();
    useDispatchMock.mockReturnValue(getClients);
    useSelectorMock.mockReturnValue([client]);

    const { getByText } = render(
      <RenderWithRouterMatch>
        <ClientsView />
      </RenderWithRouterMatch>
    );

    screen.debug();
    expect(screen.getByText("Add Client")).toBeTruthy();
    expect(getByText("Uganda")).toBeInTheDocument();
  });
});
