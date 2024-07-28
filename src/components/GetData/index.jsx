import React, { useEffect, useState } from "react";
import instance from "../Servis/servis";
// import { Container, DataItem, Section, SectionTitle, Image } from "./style";

function GetData() {
  const [doctorData, setDoctorData] = useState(null);
  const [positionData, setPositionData] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);
  const [patsientData, setPatsientData] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [treatmentData, setTreatmentData] = useState([]);
  // const [homepageData, setHomepageData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  // const [historyPatsientData, setHistoryPatsientData] = useState([]);
  // const [historyDoctorData, setHistoryDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctorPromise = instance.get("/doctor");
        const positionPromise = instance.get("/position");
        const departmentPromise = instance.get("/department");
        const patsientPromise = instance.get("/patsient");
        const roomPromise = instance.get("/room");
        const treatmentPromise = instance.get("/treatment");
        const servicePromise = instance.get("/service");

        // ----------------------------------------------------
        // const homepagePromise = instance.get("statistic/");
        // const historyPatsientPromise = instance.get("/historypatsient");
        // const historyDoctorPromise = instance.get("/history");
        //-----------------------------------------------------------

        const [
          doctorResponse,
          positionResponse,
          departmentResponse,
          patsientResponse,
          roomResponse,
          treatmentResponse,
          serviceResponse,
          // homepageResponse,
          // historyPatsientResponse,
          // historyDoctorResponse,
        ] = await Promise.all([
          doctorPromise,
          positionPromise,
          departmentPromise,
          patsientPromise,
          roomPromise,
          treatmentPromise,
          servicePromise,
          // homepagePromise,
          // historyPatsientPromise,
          // historyDoctorPromise,
        ]);

        console.log("Doctor Response Data:", doctorResponse.data);
        console.log("Position Response Data:", positionResponse.data);
        console.log("Department Response Data:", departmentResponse.data);
        console.log("Patsient Response Data:", patsientResponse.data);
        console.log("Room Response Data:", roomResponse.data);
        console.log("Treatment Response Data:", treatmentResponse.data);
        // console.log("Homepage Response Data:", homepageResponse.data);
        console.log("Service Response Data:", serviceResponse.data);
        // console.log(
        //   "History Patsient Response Data:",
        //   historyPatsientResponse.data
        // );
        // console.log(
        //   "History Doctor Response Data:",
        //   historyDoctorResponse.data
        // );

        if (doctorResponse.data.length > 0) {
          setDoctorData(doctorResponse.data[0]);
        }
        if (positionResponse.data.length > 0) {
          setPositionData(positionResponse.data);
        }
        if (departmentResponse.data.length > 0) {
          setDepartmentData(departmentResponse.data);
        }
        if (patsientResponse.data.length > 0) {
          setPatsientData(patsientResponse.data);
        }
        if (roomResponse.data.length > 0) {
          setRoomData(roomResponse.data);
        }
        if (treatmentResponse.data.length > 0) {
          setTreatmentData(treatmentResponse.data);
        }
        // if (homepageResponse.data.length > 0) {
        //   setHomepageData(homepageResponse.data);
        // }
        if (serviceResponse.data.length > 0) {
          setServiceData(serviceResponse.data);
        }
        // if (historyPatsientResponse.data.length > 0) {
        //   setHistoryPatsientData(historyPatsientResponse.data);
        // }
        // if (historyDoctorResponse.data.length > 0) {
        //   setHistoryDoctorData(historyDoctorResponse.data);
        // }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "flex" }}>
          <div>
            {doctorData && (
              <div>
                <h2>Doctor Data</h2>
                <p>Birthday: {doctorData?.birthday || "Noma'lum"}</p>
                <p>Ism: {doctorData?.name}</p>
                <p>Telefon raqam: {doctorData?.phone}</p>
                <p>jinsi: {doctorData?.gender === 1 ? "erkak" : "ayol"}</p>
                <p>Mutaxasisligi: {doctorData?.spec?.title || "Noma'lum"}</p>
                <p>Malumoti: {doctorData?.education}</p>
                <p>
                  manzil: {doctorData?.region} / {doctorData?.district}
                </p>
                <img src={doctorData?.avatar} alt="img" />
                {positionData.map((position, index) => (
                  <div key={index}>
                    <p>Lavozimi: {position.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {departmentData.length > 0 && (
            <div>
              <h2>Department Data</h2>
              <ul>
                {departmentData.map((department, index) => (
                  <li key={index}>
                    <p>Department (Bo'lim): {department.title}</p>
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
                    <p>Name: {patsient?.name}</p>
                    <p>yashash hududi: {patsient.region}</p>
                    <img src={patsient?.avatar} alt="" />
                    <p>tuman: {patsient?.district}</p>
                    <p>kelgan kuni: {patsient?.arriveDate}</p>
                    <p>ish joyi: {patsient?.workplace}</p>
                    <p>Davolovchi Doctor: {patsient?.doctor?.name}</p>
                    <p>malumoti: {patsient?.education}</p>
                    <p>Birthday: {patsient?.birthday}</p>
                    <p>Gender: {patsient?.gender === 1 ? "erkak" : "ayol"}</p>
                    <p>Phone: {patsient?.phone}</p>
                    <p>reaksiyasi: {patsient?.reactions}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {roomData.length > 0 && (
            <div>
              <h2>Room Data</h2>
              <ul>
                {roomData.map((room, index) => (
                  <li key={index}>
                    <p>xona: {room.number}</p>
                    <p>xona sig'imi: {room.maxcount}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {treatmentData.length > 0 && (
            <div>
              <h2>Treatment Data</h2>
              <ul>
                {treatmentData.map((treatment, index) => (
                  <li key={index}>
                    <p>Treatment: {treatment.comment}</p>
                    <p>Narh: {treatment.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* {homepageData.length > 0 && (
            <div>
              <h2>Homepage Data</h2>
              <ul>
                {homepageData.map((homepage, index) => (
                  <li key={index}>
                    <p>Homepage: {homepage?.summa && homepage?.summa}</p>
                  </li>
                ))}
              </ul>
            </div>
          )} */}

          {serviceData.length > 0 && (
            <div>
              <h2>Service Data</h2>
              <ul>
                {serviceData.map((service, index) => (
                  <li key={index}>
                    <p>Service: {service.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* {historyPatsientData.length > 0 && (
            <div>
              <h2>History Patsient Data</h2>
              <ul>
                {historyPatsientData.map((history, index) => (
                  <li key={index}>
                    <p>History Patsient: {history.diagnosType}</p>
                  </li>
                ))}
              </ul>
            </div>
          )} */}
          {/* 
          {historyDoctorData.length > 0 && (
            <div>
              <h2>History Doctor Data</h2>
              <ul>
                {historyDoctorData.map((history, index) => (
                  <li key={index}>
                    <p>History Doctor: {history.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </div>
      )}
    </div>

    // <Container>
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <>
    //       {doctorData && (
    //         <Section>
    //           <SectionTitle>Doctor Data</SectionTitle>
    //           <DataItem>Birthday: {doctorData.birthday || "Noma'lum"}</DataItem>
    //           <DataItem>Ism: {doctorData.name}</DataItem>
    //           <DataItem>Telefon raqam: {doctorData.phone}</DataItem>
    //           <DataItem>
    //             jinsi: {doctorData.gender === 1 ? "erkak" : "ayol"}
    //           </DataItem>
    //           <DataItem>
    //             Mutaxasisligi: {doctorData.spec?.title || "Noma'lum"}
    //           </DataItem>
    //           <DataItem>Malumoti: {doctorData.education}</DataItem>
    //           <DataItem>
    //             manzil: {doctorData.region} / {doctorData.district}
    //           </DataItem>
    //           <Image src={doctorData.avatar} alt="img" />
    //           {positionData.map((position, index) => (
    //             <DataItem key={index}>Lavozimi: {position.title}</DataItem>
    //           ))}
    //         </Section>
    //       )}

    //       {departmentData.length > 0 && (
    //         <Section>
    //           <SectionTitle>Department Data</SectionTitle>
    //           <ul>
    //             {departmentData.map((department, index) => (
    //               <DataItem key={index}>
    //                 Department (Bo'lim): {department.title}
    //               </DataItem>
    //             ))}
    //           </ul>
    //         </Section>
    //       )}

    //       {patsientData.length > 0 && (
    //         <Section>
    //           <SectionTitle>Patsient Data</SectionTitle>
    //           <ul>
    //             {patsientData.map((patsient, index) => (
    //               <li key={index}>
    //                 <DataItem>Name: {patsient.name}</DataItem>
    //                 <DataItem>yashash hududi: {patsient.region}</DataItem>
    //                 <Image src={patsient.avatar} alt="" />
    //                 <DataItem>tuman: {patsient.district}</DataItem>
    //                 <DataItem>kelgan kuni: {patsient.arriveDate}</DataItem>
    //                 <DataItem>ish joyi: {patsient.workplace}</DataItem>
    //                 <DataItem>
    //                   Davolovchi Doctor: {patsient.doctor?.name}
    //                 </DataItem>
    //                 <DataItem>malumoti: {patsient.education}</DataItem>
    //                 <DataItem>Birthday: {patsient.birthday}</DataItem>
    //                 <DataItem>
    //                   Gender: {patsient.gender === 1 ? "erkak" : "ayol"}
    //                 </DataItem>
    //                 <DataItem>Phone: {patsient.phone}</DataItem>
    //                 <DataItem>reaksiyasi: {patsient.reactions}</DataItem>
    //               </li>
    //             ))}
    //           </ul>
    //         </Section>
    //       )}

    //       {roomData.length > 0 && (
    //         <Section>
    //           <SectionTitle>Room Data</SectionTitle>
    //           <ul>
    //             {roomData.map((room, index) => (
    //               <div key={index}>
    //                 <DataItem>xona: {room.number}</DataItem>
    //                 <DataItem>xona: {room.maxcount}</DataItem>
    //               </div>
    //             ))}
    //           </ul>
    //         </Section>
    //       )}

    //       {treatmentData.length > 0 && (
    //         <Section>
    //           <SectionTitle>Treatment Data</SectionTitle>
    //           <ul>
    //             {treatmentData.map((treatment, index) => (
    //               <DataItem key={index}>
    //                 Treatment: {treatment.comment}
    //               </DataItem>
    //             ))}
    //           </ul>
    //         </Section>
    //       )}

    //       {/* {homepageData.length > 0 && (
    //         <Section>
    //           <SectionTitle>Homepage Data</SectionTitle>
    //           <ul>
    //             {homepageData.map((homepage, index) => (
    //               <DataItem key={index}>Homepage: {homepage?.summa}</DataItem>
    //             ))}
    //           </ul>
    //         </Section>
    //       )} */}

    //       {serviceData.length > 0 && (
    //         <Section>
    //           <SectionTitle>Service Data</SectionTitle>
    //           <ul>
    //             {serviceData.map((service, index) => (
    //               <DataItem key={index}>Service: {service.title}</DataItem>
    //             ))}
    //           </ul>
    //         </Section>
    //       )}

    //       {/* {historyPatsientData.length > 0 && (
    //         <Section>
    //           <SectionTitle>History Patsient Data</SectionTitle>
    //           <ul>
    //             {historyPatsientData.map((history, index) => (
    //               <DataItem key={index}>
    //                 History Patsient: {history.diagnosType}
    //               </DataItem>
    //             ))}
    //           </ul>
    //         </Section>
    //       )} */}
    //       {/*
    //       {historyDoctorData.length > 0 && (
    //         <Section>
    //           <SectionTitle>History Doctor Data</SectionTitle>
    //           <ul>
    //             {historyDoctorData.map((history, index) => (
    //               <DataItem key={index}>
    //                 History Doctor: {history.title}
    //               </DataItem>
    //             ))}
    //           </ul>
    //         </Section>
    //       )} */}
    //     </>
    //   )}
    // </Container>
  );
}

export default GetData;
