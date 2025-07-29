/* eslint-disable no-undef */
import { default as axiosInstance } from "axios";

const axios = axiosInstance.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
