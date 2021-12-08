export const authActionTypes = {
  LOGIN_USER: "LOGIN_USER",
  LOGIN_FAILED: "LOGIN_FAILED",
  REGISTER_USER: "REGISTER_USER",
  REGISTER_FAILED: "REGISTER_FAILED",
  LOGOUT_USER: "LOGOUT_USER"
};

export const loginUserAction = payload => ({
  type: authActionTypes.LOGIN_USER,
  payload
});

export const loginFailed = payload => ({
  type: authActionTypes.LOGIN_FAILED,
  payload
});

export const registerUserAction = payload => ({
  type: authActionTypes.REGISTER_USER,
  payload
});

export const registerFailed = payload => ({
  type: authActionTypes.REGISTER_FAILED,
  payload
});

export const logoutUserAction = () => ({
  type: authActionTypes.LOGOUT_USER
});
