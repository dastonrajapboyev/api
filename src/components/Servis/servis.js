import axios from "axios";
const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: "http://195.158.9.124:4109",
});

if (token) {
  instance.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default instance;
