import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../../utils/setAuthToken";
import { baseUrl } from "../../../config/baseUrl";
import { loginUserAction, registerUserAction, loginFailed, registerFailed, logoutUserAction } from "./auth.types";

export const loginUser = loginData => dispatch => {
  axios
    .post(`${baseUrl}/auth/login`, loginData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      decoded.token = token;

      dispatch(loginUserAction(decoded));
    })
    .catch(err => {
      dispatch(loginFailed(err.response.data));
    });
};

export const registerUser = registrationData => dispatch => {
  axios
    .post(`${baseUrl}/auth`, registrationData)
    .then(res => dispatch(registerUserAction(res.data)))
    .catch(err => dispatch(registerFailed(err.response.data)));
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(logoutUserAction());
};
