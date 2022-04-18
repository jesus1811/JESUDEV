import { Link } from "./styles";

interface Props {
  children: string;
  href: string;
}

export const LinkPrimary = ({ children, href }: Props) => {
  return (
    <Link href={href} target="_blank" rel="noreferrer" download="descarga">
      {children}
    </Link>
  );
};
