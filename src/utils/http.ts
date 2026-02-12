import axios from "axios";

export const http = axios.create({
  baseURL: "https://restaurant-api.dicoding.dev",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    return error;
  },
);
