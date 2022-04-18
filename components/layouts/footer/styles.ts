import styled from "styled-components";

export const Container = styled.section`
  min-height: 77vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #20232a;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 30px;
`;

export const Div = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const ContainerCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 30px;
`;
export const Copy = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
`;
