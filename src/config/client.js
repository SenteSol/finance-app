import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

instance.interceptors.request.use(config => {
  const newConfig = config;
  if (localStorage.jwtToken) {
    newConfig.headers.common.Authorization = localStorage.jwtToken;
  } else {
    delete newConfig.headers.common.Authorization;
  }
  return newConfig;
});
