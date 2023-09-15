import axios from "axios";

const instance = axios.create({
  baseURL: "https://jolly-gold-attire.cyclic.cloud/", // api url
  // baseURL: "http://localhost:4500", // api url
  // baseURL: "https://vast-plum-scallop-slip.cyclic.app",

  withCredentials: true,
});

export default instance;