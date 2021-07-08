import setAuthToken from "./setAuthToken";

const checkForToken = () => {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
  }
};

export default checkForToken;
