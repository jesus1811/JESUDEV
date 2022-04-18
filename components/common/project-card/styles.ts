import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 25px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 20px;
  text-align: center;
  z-index: 3;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 250px;
  height: 250px;
  padding: 20px;
  bottom: 0;
  z-index: 2;
  opacity: 0;
  background: #282c34;
  transition: all ease-out 150ms;
  border-width: 2px;
  border-radius: 4px;
  gap: 8px;
  :hover {
    opacity: 1;
  }
`;
export const P = styled.p`
  color: white;
  text-align: center;
  z-index: 3;
  font-size: 16px;
`;

export const Span = styled.span`
  font-size: 18px;
  color: #61dafb;
  text-align: center;
`;
export const ImageNext = styled(Image)`
  object-fit: cover;
  border-radius: 4px;
`;
