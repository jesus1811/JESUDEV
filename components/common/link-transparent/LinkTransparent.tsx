import { LinkScroll } from "./styles";
interface Props {
  children: string;
  to: string;
}
export const LinkTransparent = ({ children, to }: Props) => {
  return (
    <LinkScroll to={to} smooth={true}>
      {children}
    </LinkScroll>
  );
};
