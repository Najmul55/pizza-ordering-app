import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://pizza-ordering-app-lilac.vercel.app/api/",
});

export default baseURL;
