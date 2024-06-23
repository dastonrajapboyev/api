import React, { useEffect, useState } from "react";
import instance from "../Servis/servis";

function GetData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/doctor");
        if (response.data.length > 0) {
          setData(response.data[0]);
          console.log(response.data[0], "console");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? <h1>{data.birthday}</h1> : <p>Loading...</p>}</div>;
}

export default GetData;
