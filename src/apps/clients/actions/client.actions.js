import axios from "axios";
import { baseUrl } from "../../../config/baseUrl";
import { getClientsAction, getAClientAction, clientActionFailed, deleteClientAction } from "./client.types";

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

export const getClient = () => dispatch => {
  axios
    .get(`${baseUrl}/client/manager/email`)
    .then(res => {
      dispatch(getAClientAction(res.data));
    })
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
