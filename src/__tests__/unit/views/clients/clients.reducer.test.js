import clientReducer, { initialState } from "../../../../redux/reducers/clients.reducer";
import { clientActionTypes } from "../../../../redux/actions/clients/actions/client.types";
import { client } from "../../../__fixtures__/client";
import {
  successfulClientEvent,
  successfulClientsEvent,
  deleteClientEvent,
  failedClientEvent
} from "../../../__fixtures__/events/clientEvents";

describe("events reducer", () => {
  it("Should handle GET_ALL_CLIENTS", () => {
    const action = {
      type: clientActionTypes.GET_ALL_CLIENTS,
      payload: client
    };
    expect(clientReducer(initialState, action)).toEqual(successfulClientsEvent);
  });

  it("Should handle GET_CLIENT", () => {
    const action = {
      type: clientActionTypes.GET_CLIENT,
      payload: client
    };
    expect(clientReducer(initialState, action)).toEqual(successfulClientEvent);
  });

  it("Should handle ADD_A_CLIENT", () => {
    const action = {
      type: clientActionTypes.ADD_A_CLIENT,
      payload: client
    };
    expect(clientReducer(initialState, action)).toEqual(successfulClientEvent);
  });

  it("Should handle DELETE_A_CLIENT", () => {
    const action = {
      type: clientActionTypes.DELETE_A_CLIENT
    };
    expect(clientReducer(initialState, action)).toEqual(deleteClientEvent);
  });

  it("Should handle FAILED_CLIENT_ERROR", () => {
    const action = {
      type: clientActionTypes.CLIENT_REQUEST_FAILED
    };
    expect(clientReducer(initialState, action)).toEqual(failedClientEvent);
  });
});
