import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
`;
export const ImageNext = styled(Image)`
  width: 100%;
`;

export const P = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 300;
`;
