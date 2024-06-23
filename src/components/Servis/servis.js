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

localStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTA1MzE4MjMzNmU2Zjc0NTBmNDIwMiIsImlhdCI6MTcxOTE1MjgzMywiZXhwIjoxNzE5MjM5MjMzfQ.xtvU1-82-KJxi-ZHkm762kAICyWrgfW-zKBbuD_RPRU"
);

const instance = axios.create({
  baseURL: "http://95.130.227.52:3112",
});

if (token) {
  instance.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default instance;
