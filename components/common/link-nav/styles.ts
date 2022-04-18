import styled from "styled-components";
import { Link } from "react-scroll";

export const LinkScroll = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  color: white;
  transition: all ease-out 150ms;
  cursor: pointer;
  font-size: 18px;
  :hover {
    color: #61dafb;
  }
`;
