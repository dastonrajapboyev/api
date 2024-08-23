import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import GetData from "./components/GetData";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetData />} />
        <Route path="/register" element={<Registration />} />/
        <Route path="/login" element={<Login />} />
      </Routes>
      <Registration />
    </Router>
  );
}

export default App;

// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Login from "./components/Login";
// import GetData from "./components/GetData";
// import Registration from "./components/Registration";

// function App() {
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Function to handle successful registration
//   const handleRegistrationSuccess = () => {
//     setIsRegistered(true);
//   };

//   // Function to handle successful login
//   const handleLoginSuccess = (token) => {
//     setIsLoggedIn(true);
//     // Store the token in localStorage or state
//     localStorage.setItem("authToken", token);
//   };

//   // Check if token exists
//   const token = localStorage.getItem("authToken");

//   return (
//     <Router>
//       <Routes>
//         {!isRegistered && !token ? (
//           // Render Registration component first
//           <Route
//             path="/"
//             element={<Registration onRegister={handleRegistrationSuccess} />}
//           />
//         ) : !isLoggedIn && !token ? (
//           // Render Login component after registration
//           <Route path="/" element={<Login onLogin={handleLoginSuccess} />} />
//         ) : (
//           // Render GetData component if logged in or token is present
//           <Route path="/" element={<GetData />} />
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//////////////////////////////////////////
