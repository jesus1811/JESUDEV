import styled from "styled-components";

export const Link = styled.a`
  padding: 8px 16px;
  border-radius: 4px;
  background: #61dafb;
  font-size: 20px;
  transition: all ease-out 150ms;
  cursor: pointer;
  border: solid 2px #61dafb;
  color: black;
  text-decoration: none;
  :hover {
    background: #53bbd8;
    border: solid 2px #53bbd8;
  }
`;

// className="py-2 px-4 rounded border-2 border-[#61dafb]
//     text-black transition-all text-[20px] bg-[#61dafb]
//     cursor-pointer  hover:bg-[#53bbd8] hover:border-[#53bbd8]"
