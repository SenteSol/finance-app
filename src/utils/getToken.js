import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import store from "../redux/combineStore";
import { loginUserAction } from "../views/auth/actions/auth.types";

export const checkForToken = () => {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
  }
};

export const getTokenData = () => {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(loginUserAction(decoded));
  }
};
