import React, { useEffect, useState } from "react";
import instance from "../Servis/servis";

function GetData() {
  const [doctorData, setDoctorData] = useState(null);
  const [positionData, setPositionData] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);
  const [patsientData, setPatsientData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data from /doctor endpoint
        const doctorPromise = instance.get("/doctor");

        // Fetching data from /position endpoint
        const positionPromise = instance.get("/position");

        // Fetching data from /department endpoint
        const departmentPromise = instance.get("/department");

        // Fetching data from /patsient endpoint
        const patsientPromise = instance.get("/patsient");

        // Waiting for all promises to resolve using Promise.all
        const [
          doctorResponse,
          positionResponse,
          departmentResponse,
          patsientResponse,
        ] = await Promise.all([
          doctorPromise,
          positionPromise,
          departmentPromise,
          patsientPromise,
        ]);

        console.log("Doctor Response Data:", doctorResponse.data);
        console.log("Position Response Data:", positionResponse.data);
        console.log("Department Response Data:", departmentResponse.data);
        console.log("Patsient Response Data:", patsientResponse.data);

        // Handling doctor data
        if (doctorResponse.data.length > 0) {
          setDoctorData(doctorResponse.data[0]);
        }

        // Handling position data
        if (positionResponse.data.length > 0) {
          setPositionData(positionResponse.data);
        }

        // Handling department data
        if (departmentResponse.data.length > 0) {
          setDepartmentData(departmentResponse.data);
        }

        // Handling patsient data
        if (patsientResponse.data.length > 0) {
          setPatsientData(patsientResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading state to false once data fetching is complete
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {doctorData && (
            <div>
              <h2>Doctor Data</h2>
              <p>Birthday: {doctorData.birthday}</p>
              {/* Display other relevant doctor data */}
            </div>
          )}
          {positionData.length > 0 && (
            <div>
              <h2>Position Data</h2>
              <ul>
                {positionData.map((position, index) => (
                  <li key={index}>
                    <p>Title: {position.title}</p>
                    {/* Display other relevant fields from position */}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {departmentData.length > 0 && (
            <div>
              <h2>Department Data</h2>
              <ul>
                {departmentData.map((department, index) => (
                  <li key={index}>
                    <p>Department ID: {department._id}</p>
                    <p>Created Time: {department.createdTime}</p>
                    {/* Display other relevant fields from department */}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {patsientData.length > 0 && (
            <div>
              <h2>Patsient Data</h2>
              <ul>
                {patsientData.map((patsient, index) => (
                  <li key={index}>
                    <p>Name: {patsient.name}</p>
                    <p>Birthday: {patsient.birthday}</p>
                    <p>Gender: {patsient.gender === 1 ? "Male" : "Female"}</p>
                    <p>Phone: {patsient.phone}</p>
                    {/* Display other relevant fields from patsient */}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GetData;
