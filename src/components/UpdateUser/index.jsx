import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    const url = "http://195.158.9.124:4109/auth/update";

    try {
      const response = await axios.put(url, formData);
      console.log("Update Response:", response);
      if (response.data && response.status === 200) {
        setError("");
        navigate("/profile"); // Adjust the route based on your app's navigation
      } else {
        setError("Update failed. Please try again.");
      }
    } catch (error) {
      console.error("Update Error:", error.response || error.message);
      setError("An error occurred during the update.");
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="login"
          value={formData.login}
          onChange={handleChange}
          placeholder="Login"
          required
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
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
        <button type="submit">Update</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default UpdateUser;
