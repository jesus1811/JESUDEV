import { Link } from "react-scroll";
import { LinkNav } from "../common";

export const Header = () => {
  return (
    <div
      className="w-full py-[10px] fixed left-0 top-0 z-50
flex flex-col justify-center items-center bg-[#0d0d0dd9]"
    >
      <div className="w-9/12 h-full flex justify-between items-center">
        <input type="checkbox" id="check" className="hidden" />
        <Link
          to="inicio"
          smooth={true}
          className="text-white cursor-pointer text-[30px] font-semibold"
        >
          JesuDev
        </Link>
        <label htmlFor="check" className="btnCheck">
          <img
            className="w-[45px] hidden links__menu [color:var(--azulBrillante)]"
            src="menu.svg"
            alt=""
          />
        </label>
        <nav className="w-full flex justify-end gap-[18px] transition-all links__nav">
          <LinkNav to="about">Sobre Mi</LinkNav>
          <LinkNav to="skill">Skills</LinkNav>
          <LinkNav to="proyect">Proyectos</LinkNav>
          <LinkNav to="contact">Contactos</LinkNav>
        </nav>
      </div>
    </div>
  );
};
