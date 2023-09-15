import axios from "axios";

const instance = axios.create({
  // baseURL: "https://jolly-gold-attire.cyclic.cloud/", // api url
  // baseURL: "http://localhost:4500", // api url
  baseURL: "https://evangadi-forum-3lre.onrender.com",

  withCredentials: true,
});

export default instance;