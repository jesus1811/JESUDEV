import { ContainerPrimary, ImageCard, LabelMain } from "../../common";
import { ContainerCard, Div, P } from "./styles";

export const Skill = () => {
  return (
    <ContainerPrimary className="skill" color="#20232a">
      <Div>
        <P data-aos="fade-right">
          <LabelMain>Skills</LabelMain>
          Mi sección de tecnologías:
        </P>
        <ContainerCard>
          <ImageCard icono="/html.svg" nombre="HTML" />
          <ImageCard icono="/css.svg" nombre="CSS" />
          <ImageCard icono="/javascript.svg" nombre="JavaScript" />
          <ImageCard icono="/git.svg" nombre="Git" />
          <ImageCard icono="/github.svg" nombre="GitHub" />
          <ImageCard icono="/react.svg" nombre="React JS" />
          <ImageCard icono="/next-js.svg" nombre="Next JS" />
          <ImageCard icono="/tailwind.svg" nombre="Tailwind" />
          <ImageCard icono="/sass.svg" nombre="Sass" />
          <ImageCard icono="/npm.svg" nombre="NPM" />
          <ImageCard icono="/nodejs.svg" nombre="Node JS" />
          <ImageCard icono="/gitlab.svg" nombre="GitLab" />
        </ContainerCard>
      </Div>
    </ContainerPrimary>
  );
};
