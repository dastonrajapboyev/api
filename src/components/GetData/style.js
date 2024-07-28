import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

export const Section = styled.div`
  flex: 1 1 300px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #333;
`;

export const DataItem = styled.p`
  font-size: 1em;
  margin: 5px 0;
  color: #666;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
`;
