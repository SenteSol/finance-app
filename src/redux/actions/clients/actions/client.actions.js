import { instance } from "../../../../config/client";
import {
  getClientsAction,
  clientActionFailed,
  deleteClientAction,
  addClientAction,
  getAClientAction,
  editClientAction
} from "./client.types";

export const getClients = () => dispatch => {
  instance
    .get("client/manager/email")
    .then(res => {
      dispatch(getClientsAction(res.data));
    })
    .catch(err => {
      dispatch(clientActionFailed(err.response.data));
    });
};

export const getClient = clientId => dispatch => {
  instance
    .get(`client/${clientId}`)
    .then(res => {
      dispatch(getAClientAction(res.data));
    })
    .catch(err => {
      dispatch(clientActionFailed(err.response.data));
    });
};

export const addClient = clientData => dispatch => {
  instance
    .post("client", clientData)
    .then(res => {
      dispatch(addClientAction(res.data));
    })
    .catch(err => {
      dispatch(clientActionFailed(err.response.data));
    });
};

export const editClient = (jsonData, clientId) => dispatch => {
  instance
    .put(`client/${clientId}`, jsonData)
    .then(() => dispatch(editClientAction()))
    .catch(err => {
      dispatch(clientActionFailed(err.response.data));
    });
};

export const deleteClient = clientId => dispatch => {
  instance
    .delete(`client/${clientId}`)
    .then(() => dispatch(deleteClientAction()))
    .catch(err => {
      dispatch(clientActionFailed(err.response.data));
    });
};
