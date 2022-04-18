import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: stretch;
  align-items: center;
  width: 75%;
  height: 65%;
  gap: 30px;
`;

export const P = styled.p`
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  gap: 8px;
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
  justify-items: stretch;
  align-items: center;
  width: 100%;
  gap: 48px;
`;
