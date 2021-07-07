import { authActionTypes } from "./actions/auth.types";

const initialState = {
  isAuthenticated: false,
  error: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        error: {},
        currentUser: action.payload
      };

    case authActionTypes.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {},
        error: action.payload
      };

    case authActionTypes.REGISTER_USER:
      return {
        ...state,
        isAuthenticated: true,
        createUser: action.payload,
        error: {}
      };
    case authActionTypes.REGISTER_FAILED:
      return {
        ...state,
        error: action.payload,
        createUser: {}
      };
    default:
      return state;
  }
};

export default authReducer;
