import { Link } from "react-scroll";
interface Props {
  children: string;
  to: string;
}
export const LinkTransparent = ({ children, to }: Props) => {
  return (
    <Link
      to={to}
      smooth={true}
      className="py-2 px-4 rounded border-2 border-[#61dafb]
    text-[#61dafb] transition-all text-[20px] bg-transparent cursor-pointer  hover:bg-[#61dafb] hover:text-black"
    >
      {children}
    </Link>
  );
};
