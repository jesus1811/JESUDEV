import { Link } from "react-scroll";

export const LinkNav = ({ title, to }) => {
  return (
    <Link
      to={to}
      smooth={true}
      className="flex justify-center items-center py-2 px-4 text-white transition-all cursor-pointer 
              text-lg links__a--azul hover:text-[#61dafb] links__a"
    >
      {title}
    </Link>
  );
};
