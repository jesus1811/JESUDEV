import { Link } from "react-scroll";
interface Props {
  children: string;
  to: string;
}

export const LinkNav = ({ children, to }: Props) => {
  return (
    <Link
      to={to}
      smooth={true}
      className="flex justify-center items-center py-2 px-4 text-white transition-all cursor-pointer 
              text-lg links__a--azul hover:text-[#61dafb] links__a"
    >
      {children}
    </Link>
  );
};
