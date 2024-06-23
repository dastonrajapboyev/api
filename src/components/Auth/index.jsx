import React, { useEffect, useState } from "react";
import axios from "axios";

const GetData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    axios
      .get("https://hospital.bookblogs.uz/data", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setData(response.data);
        setError("");
      })
      .catch((error) => {
        console.error("GetData Error:", error.response || error.message);
        setError("An error occurred while fetching data.");
      });
  }, []);

  return (
    <div>
      <h2>Data</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default GetData;
