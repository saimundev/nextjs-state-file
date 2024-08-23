import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5050/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = "saimun";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiClient;
