import { LinkNav } from "../../common";
import { Container, Div, Image, LinkScroll, Navigation } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Div>
        <input type="checkbox" id="check" className="hidden" />
        <LinkScroll to="inicio" smooth={true}>
          JesuDev
        </LinkScroll>
        <label htmlFor="check" className="btnCheck">
          <Image src="menu.svg" alt="" />
        </label>
        <Navigation>
          <LinkNav to="about">Sobre Mi</LinkNav>
          <LinkNav to="skill">Skills</LinkNav>
          <LinkNav to="proyect">Proyectos</LinkNav>
          <LinkNav to="contact">Contactos</LinkNav>
        </Navigation>
      </Div>
    </Container>
  );
};
