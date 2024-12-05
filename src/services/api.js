import axios from "axios";
import { decryptToken } from "../services/secret";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      const decryptedToken = decryptToken(token);
      config.headers["Authorization"] = `Token ${decryptedToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;