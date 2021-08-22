export const tokenActionTypes = {
  SET_TOKEN: "SET_TOKEN",
  REMOVE_TOKEN: "REMOVE_TOKEN"
};

export const setTokenAction = payload => ({
  type: tokenActionTypes.SET_TOKEN,
  payload
});

export const clearTokenAction = () => ({
  type: tokenActionTypes.REMOVE_TOKEN
});
