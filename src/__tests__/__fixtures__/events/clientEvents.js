import { client } from "../client";

export const successfulClientsEvent = {
  clients: client,
  client: {},
  error: {},
  delete: false
};

export const successfulClientEvent = {
  clients: [],
  client,
  error: {},
  delete: false
};

export const deleteClientEvent = {
  clients: [],
  client:{},
  error: "",
  delete: true
};

export const failedClientEvent = {
  clients: [],
  client:{},
  error: undefined,
  delete: false
};
