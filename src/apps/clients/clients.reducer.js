import { clientActionTypes } from "./actions/client.types";

const initialState = {
  clients: [false],
  client: {},
  error: ""
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case clientActionTypes.GET_ALL_CLIENTS:
      return {
        ...state,
        clients: action.payload,
        client: {},
        error: {}
      };

    case clientActionTypes.GET_CLIENT:
      return {
        ...state,
        clients: [],
        client: action.payload,
        error: {}
      };
    default:
      return state;
  }
};

export default clientReducer;
