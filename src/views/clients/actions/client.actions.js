import axios from "axios";
import { baseUrl } from "../../../config/baseUrl";
import {
  getClientsAction,
  clientActionFailed,
  deleteClientAction,
  addClientAction,
  getAClientAction,
  editClientAction
} from "./client.types";

export const getClients = () => dispatch => {
  axios
    .get(`${baseUrl}/client/manager/email`)
    .then(res => {
      dispatch(getClientsAction(res.data));
    })
    .catch(err => {
      dispatch(clientActionFailed(err.response.data));
    });
};

export const getClient = clientId => dispatch => {
  axios
    .get(`${baseUrl}/client/${clientId}`)
    .then(res => {
      dispatch(getAClientAction(res.data));
    })
    .catch(err => {
      dispatch(clientActionFailed(err.response.data));
    });
};

export const addClient = clientData => dispatch => {
  axios
    .post(`${baseUrl}/client`, clientData)
    .then(res => {
      dispatch(addClientAction(res.data));
    })
    .catch(err => {
      dispatch(clientActionFailed(err.response.data));
    });
};

export const editClient = (jsonData, clientId) => dispatch => {
  axios
    .put(`${baseUrl}/client/${clientId}`, jsonData)
    .then(() => dispatch(editClientAction()))
    .catch(err => {
      dispatch(clientActionFailed(err.response.data));
    });
};

export const deleteClient = clientId => dispatch => {
  axios
    .delete(`${baseUrl}/client/${clientId}`)
    .then(() => dispatch(deleteClientAction()))
    .catch(err => {
      dispatch(clientActionFailed(err.response.data));
    });
};
