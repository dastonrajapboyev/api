import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ login: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://195.158.9.124:4109/auth/login";
    try {
      const response = await axios.post(url, formData);
      console.log("Login Response:", response);
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        setError("");
        navigate("/");
      } else {
        setError("Authentication failed. Please check your login details.");
      }
    } catch (error) {
      console.error("Login Error:", error.response || error.message);
      setError("An error occurred during authentication.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          value={formData.login}
          onChange={handleChange}
          placeholder="Login"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={() => navigate("/register")}>Go to Register</button>
    </div>
  );
};

export default Login;
