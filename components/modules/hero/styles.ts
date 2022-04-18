import styled from "styled-components";
import Image from "next/image";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -50;
`;

export const ImageNext = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -10;
  filter: brightness(45%);
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Nombre = styled.h1`
  font-size: 60px;
  color: #61dafb;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 45px;
  }
`;

export const Rol = styled.p`
  color: white;
  font-size: 28px;
  @media (max-width: 1024px) {
    font-size: 22px;
  }
`;
