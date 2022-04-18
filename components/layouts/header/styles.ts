import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0d0d0dd9;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Div = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkScroll = styled(Link)`
  color: white;
  cursor: pointer;
  font-size: 30px;
  font-weight: 600;
`;
export const Image = styled.img`
  width: 45px;
  display: none;
  color: #61dafb;

  @media (max-width: 1024px) {
    display: block;
  }
`;
export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 18px;
  transition: all ease-out 150ms;

  @media (max-width: 1024px) {
    position: absolute;
    width: 140px;
    opacity: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #0d0d0dd9;
    gap: 0;
    height: 0;
    top: 71.56px;
    right: 5.5%;
    bottom: 0;
    border-radius: 4px;
    overflow: hidden;
  }
`;
