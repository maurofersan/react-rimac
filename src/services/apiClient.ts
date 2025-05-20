import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://rimac-front-end-challenge.netlify.app/api",
  headers: { "Content-Type": "application/json" },
});
