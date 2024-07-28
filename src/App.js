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

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import GetData from "./components/GetData";
// import Registration from "./components/Registration";
// import UpdateUser from "./components/UpdateUser"; // Make sure to create and import UpdateUser component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<GetData />} />
//         <Route path="/register" element={<Registration />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/update" element={<UpdateUser />} /> {/* Add this line */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import GetData from "./components/GetData";
// import Registration from "./components/Registration";
// import UpdateUser from "./components/UpdateUser";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<GetData />} />
//         <Route path="/register" element={<Registration />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/update" element={<UpdateUser />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
