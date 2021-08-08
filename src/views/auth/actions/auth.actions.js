import jwt_decode from "jwt-decode";
import { loginUserAction, registerUserAction, loginFailed, registerFailed, logoutUserAction } from "./auth.types";
import { instance } from "../../../config/client";

export const loginUser = loginData => dispatch => {
  instance
    .post("auth/login", loginData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      const decoded = jwt_decode(token);
      decoded.token = token;

      dispatch(loginUserAction(decoded));
    })
    .catch(err => {
      dispatch(loginFailed(err.response.data));
    });
};

export const registerUser = registrationData => dispatch => {
  instance
    .post("auth", registrationData)
    .then(res => dispatch(registerUserAction(res.data)))
    .catch(err => dispatch(registerFailed(err.response.data)));
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch(logoutUserAction());
};
