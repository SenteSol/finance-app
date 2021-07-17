export const clientActionTypes = {
  GET_ALL_CLIENTS: "GET_ALL_CLIENTS",
  GET_CLIENT: "GET_CLIENT",
  ADD_A_CLIENT: "ADD_A_CLIENT",
  EDIT_A_CLIENT: "EDIT_A_CLIENT",
  DELETE_A_CLIENT: "DELETE_A_CLIENT",
  CLIENT_REQUEST_FAILED: "CLIENT_REQUEST_FAILED"
};

export const getClientsAction = payload => ({
  type: clientActionTypes.GET_ALL_CLIENTS,
  payload
});

export const getAClientAction = payload => ({
  type: clientActionTypes.GET_CLIENT,
  payload
});

export const addClientAction = payload => ({
  type: clientActionTypes.ADD_A_CLIENT,
  payload
});

export const editClientAction = payload => ({
  type: clientActionTypes.EDIT_A_CLIENT,
  payload
});

export const deleteClientAction = payload => ({
  type: clientActionTypes.DELETE_A_CLIENT,
  payload
});

export const clientActionFailed = payload => ({
  type: clientActionTypes.CLIENT_REQUEST_FAILED,
  payload
});
