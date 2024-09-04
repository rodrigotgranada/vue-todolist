import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // URL base da API simulada
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
