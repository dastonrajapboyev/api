// import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   padding: 20px;
// `;

// export const Section = styled.div`
//   flex: 1 1 300px;
//   background: #f9f9f9;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// export const SectionTitle = styled.h2`
//   font-size: 1.5em;
//   margin-bottom: 15px;
//   color: #333;
// `;

// export const DataItem = styled.p`
//   font-size: 1em;
//   margin: 5px 0;
//   color: #666;
// `;

// export const Image = styled.img`
//   max-width: 100%;
//   height: auto;
//   border-radius: 8px;
//   margin-top: 10px;
// `;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: flex-start; */
  gap: 24px;
  padding: 40px;
  background-color: #f7f7f7;
`;

export const Section = styled.div`
  flex: 1 1 350px;
  max-width: 400px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.75em;
  margin-bottom: 20px;
  color: #444;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
`;

export const DataItem = styled.p`
  font-size: 1em;
  margin: 8px 0;
  color: #555;
  line-height: 1.5;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LoadingText = styled.p`
  font-size: 1.5em;
  color: #888;
  text-align: center;
  width: 100%;
`;
