import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: "http://3.145.90.25:3100/", //    URL
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  console.log("token:", token);
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});
