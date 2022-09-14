import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://pizza-ordering-app-lilac.vercel.app/api/",

  /**
   * vercel er domain diye envernment variable se automatic genarate kore ney.
   * amara VERCEL_URL diye dile deploy korar por se automatic niye nibe
   * "https://pizza-ordering-app-lilac.vercel.app/api/products",  // emon niye nibe
   * 
       / VERCEL_URL; it will work for for every type of website
       / NEXT_PUBLIC_VERCEL_URL;  it is only for next js
   * 
   */
});

export default baseURL;

// (process.env.NODE_ENV === "development"
// ? "http://localhost:3000"
// : "https://" + process.env.NEXT_PUBLIC_VERCEL_URL) + "/api/",
