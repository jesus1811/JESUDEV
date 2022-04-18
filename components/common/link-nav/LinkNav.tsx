import { LinkScroll } from "./styles";

interface Props {
  children: string;
  to: string;
}

export const LinkNav = ({ children, to }: Props) => {
  return (
    <LinkScroll to={to} smooth={true} className="links__a">
      {children}
    </LinkScroll>
  );
};
