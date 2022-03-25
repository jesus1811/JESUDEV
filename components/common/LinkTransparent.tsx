import { init } from "aos";
import { useEffect } from "react";
import { Link } from "react-scroll";
interface Props {
  children: string;
  to: string;
}
export const LinkTransparent = ({ children, to }: Props) => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <Link
      to={to}
      smooth={true}
      className="py-2 px-4 rounded border-2 border-[#61dafb]
    text-[#61dafb] transition-all text-[20px] bg-transparent cursor-pointer  hover:bg-[#61dafb] hover:text-black"
      data-aos="zoom-in"
    >
      {children}
    </Link>
  );
};
