import axios from "axios";

const apiRequest = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  baseURL: "/api/",
  withCredentials:true,
  withXSRFToken:true,
});


export default apiRequest;
