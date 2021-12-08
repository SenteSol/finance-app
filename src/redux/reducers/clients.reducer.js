import { clientActionTypes } from "../actions/clients/actions/client.types";

export const initialState = {
  clients: [],
  client: {},
  error: "",
  delete: false
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case clientActionTypes.GET_ALL_CLIENTS:
      return {
        ...state,
        clients: action.payload,
        client: {},
        error: {},
        delete: false
      };

    case clientActionTypes.GET_CLIENT:
      return {
        ...state,
        clients: [],
        client: action.payload,
        error: {},
        delete: false
      };
    case clientActionTypes.ADD_A_CLIENT:
      return {
        ...state,
        clients: [],
        client: action.payload,
        error: {},
        delete: false
      };
    case clientActionTypes.DELETE_A_CLIENT:
      return {
        ...state,
        delete: true
      };
    case clientActionTypes.CLIENT_REQUEST_FAILED:
      return {
        ...state,
        clients: [],
        client: {},
        error: action.payload,
        delete: false
      };
    default:
      return state;
  }
};

export default clientReducer;
