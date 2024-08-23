// import styled from "styled-components";

// export const RegisterContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f0f2f5;
// `;

// export const RegisterBox = styled.div`
//   background-color: #fff;
//   padding: 40px;
//   border-radius: 8px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   max-width: 400px;
//   width: 100%;
// `;

// export const Title = styled.h2`
//   margin-bottom: 24px;
//   color: #333;
//   text-align: center;
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin-bottom: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
//   box-sizing: border-box;

//   &:focus {
//     border-color: #28a745;
//     outline: none;
//     box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.25);
//   }
// `;

// export const Button = styled.button`
//   width: 100%;
//   padding: 12px;
//   background-color: #28a745;
//   color: white;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #218838;
//   }
// `;

// export const ErrorMessage = styled.p`
//   color: red;
//   margin-top: 16px;
//   text-align: center;
// `;

// export const LoginButton = styled.button`
//   width: 100%;
//   margin-top: 16px;
//   padding: 12px;
//   background-color: #6c757d;
//   color: white;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #5a6268;
//   }
// `;

import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const RegisterBox = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  color: #333;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #28a745;
    outline: none;
    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.25);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

export const ErrorMessage = styled.p`
  color: #d9534f;
  margin-top: 16px;
  text-align: center;
`;

export const LoginButton = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 12px;
  background-color: #6c757d;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a6268;
  }
`;
