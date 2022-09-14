import axios from "axios";

const baseURL = axios.create({
  baseURL: "/api/",
});

export default baseURL;
