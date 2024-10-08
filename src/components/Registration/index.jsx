// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     login: "",
//     name: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = "http://195.158.9.124:4109/auth/reg";

//     try {
//       const response = await axios.post(url, formData);
//       console.log("Registration Response:", response);
//       if (response.data && response.status === 201) {
//         setError("");
//         navigate("/login");
//       } else {
//         setError("Registration failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Registration Error:", error.response || error.message);
//       setError("An error occurred during registration.");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="login"
//           value={formData.login}
//           onChange={handleChange}
//           placeholder="Login"
//           required
//         />
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <button onClick={() => navigate("/login")}>Go to Login</button>
//     </div>
//   );
// };

// export default Registration;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  RegisterContainer,
  RegisterBox,
  Title,
  Input,
  Button,
  ErrorMessage,
  LoginButton,
} from "./style";

const Registration = () => {
  const [formData, setFormData] = useState({
    login: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://195.158.9.124:4109/auth/reg";

    try {
      const response = await axios.post(url, formData);
      console.log("Registration Response:", response);
      if (response.data && response.status === 201) {
        setError("");
        navigate("/login");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration Error:", error.response || error.message);
      setError("An error occurred during registration.");
    }
  };

  return (
    <RegisterContainer>
      <RegisterBox>
        <Title>Register</Title>
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
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
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
          <Button type="submit">Register</Button>
        </form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginButton onClick={() => navigate("/login")}>
          Go to Login
        </LoginButton>
      </RegisterBox>
    </RegisterContainer>
  );
};

export default Registration;
