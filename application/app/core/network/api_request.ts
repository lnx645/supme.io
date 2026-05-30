import axios from "axios";

const apiRequest = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  baseURL: "/api/",
});

export default apiRequest;
