import axios from "axios";

const DEFAULT_API = "http://localhost:3002";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || DEFAULT_API,
  withCredentials: true,
});

export default api;
