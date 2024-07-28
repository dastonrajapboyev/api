// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://95.130.227.52:3112",
// });

// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default instance;

import axios from "axios";
const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: "http://195.158.9.124:4109",
});

if (token) {
  instance.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default instance;
