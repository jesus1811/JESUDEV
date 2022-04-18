import styled from "styled-components";

export const ReferenciaInicio = styled.div`
  height: 100vh;
`;
export const Div = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;
export const P = styled.p`
  font-size: 20px;
  color: white;
  text-align: justify;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 28px;
`;
