import {
  ContainerPrimary,
  LabelMain,
  LinkPrimary,
  LinkTransparent,
} from "../../common";
import { ContainerButton, Div, P, ReferenciaInicio } from "./styles";

export const About = () => {
  return (
    <>
      <ReferenciaInicio className="inicio"></ReferenciaInicio>
      <ContainerPrimary className="about" color="#282c34">
        <Div>
          <LabelMain>Sobre Mi</LabelMain>
          <P data-aos="fade-up">
            HELLO WORLD! I AM JESUS AYARZA Soy Front-end Developer
            especializándome en React JS y la maquetación responsive, tengo 6
            meses de experiencia en trabajo remoto en equipo creando
            aplicaciones web y landing page personalizadas, me caracterizo por
            ser autodidacta leer mucha documentación y seguir buenas practicas.
          </P>
          <ContainerButton data-aos="fade-up">
            <LinkPrimary href="https://jesus1811.github.io/cv/JesusAyarzaCV.pdf">
              Descargar CV
            </LinkPrimary>
            <LinkTransparent to="contact">Contactame</LinkTransparent>
          </ContainerButton>
        </Div>
      </ContainerPrimary>
    </>
  );
};
