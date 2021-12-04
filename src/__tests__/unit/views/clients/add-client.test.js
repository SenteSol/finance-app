import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import AddClientsView from "../../../../views/clients/add-client-view";
import { RenderWithRouterMatch } from "../../../test-utils";
import { client } from "../../../__fixtures__/client";

let matchMedia;

describe("Add Clients Tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("It should add a client", async () => {
    const { getByText } = render(
      <RenderWithRouterMatch>
        <AddClientsView />
      </RenderWithRouterMatch>
    );

    expect(getByText("Close")).toBeInTheDocument();
    const clientName = screen.getByLabelText("Client");
    const address = screen.getByLabelText("Address");
    const city = screen.getByLabelText("City");
    const country = screen.getByLabelText("Country");
    const email = screen.getByLabelText("Email Address");
    const number = screen.getByLabelText("Tel No");
    fireEvent.change(clientName, { target: { value: client.name } });
    fireEvent.change(address, { target: { value: client.address } });
    fireEvent.change(city, { target: { value: client.city } });
    fireEvent.change(country, { target: { value: client.country } });
    fireEvent.change(email, { target: { value: client.email } });
    fireEvent.change(number, { target: { value: client.number } });
    const saveButton = screen.getByRole("button", { name: "Save" });
    const closeButton = screen.getByRole("button", { name: "Close" });
    fireEvent.click(saveButton);
    fireEvent.click(closeButton);
    await waitFor(() => getByText(/Dashboard/i));
  });
});
