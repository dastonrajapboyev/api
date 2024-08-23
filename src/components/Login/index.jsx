import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  ErrorMessage,
  Input,
  LoginBox,
  LoginContainer,
  RegisterButton,
  Title,
} from "./style";

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
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
            placeholder="Login"
            required
          />
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <Button type="submit">Login</Button>
        </form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <RegisterButton onClick={() => navigate("/register")}>
          Go to Register
        </RegisterButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
