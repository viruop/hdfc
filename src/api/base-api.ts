import axios, { AxiosInstance } from "axios";

// const baseURL = "http://localhost:5006"; // Replace with your API base URL
const baseURL = process.env.CRM_API; // Replace with your API base URL

const apiClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "x-tenant-id": "hc",
  },
});

export default apiClient;
