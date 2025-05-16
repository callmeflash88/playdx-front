import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: "http://3.145.90.25:3100/", // заменить на реальный URL
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
