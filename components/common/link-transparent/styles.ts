import { Link } from "react-scroll";
import styled from "styled-components";

export const LinkScroll = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  border: solid 2px #61dafb;
  color: #61dafb;
  transition: all ease-out 150ms;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
  :hover {
    background: #61dafb;
    color: black;
  }
`;
