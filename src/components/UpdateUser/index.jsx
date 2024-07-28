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
      navigate("/"); // Navigate back to the main page after successful update
    } catch (err) {
      console.error("Update Error:", err);
      setError("Update failed. Please try again.");
    }
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Login:</label>
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
