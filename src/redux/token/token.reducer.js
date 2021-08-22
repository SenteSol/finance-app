import { tokenActionTypes } from "./token.types";

const initialState = {
  bearer: ""
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case tokenActionTypes.SET_TOKEN:
      return {
        ...state,
        bearer: action.payload
      };
    case tokenActionTypes.REMOVE_TOKEN:
      return {
        ...state,
        bearer: ""
      };
    default:
      return state;
  }
};

export default tokenReducer;
