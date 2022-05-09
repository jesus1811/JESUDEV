import { ContainerPrimary, ImageCard, LabelMain } from "../../common";
import styles from "./skill.module.scss";

export const Skill = () => {
  return (
    <ContainerPrimary className="skill" color="bgDarkSecundary">
      <div className={styles.containerDiv}>
        <p className={styles.parrafo} data-aos="fade-right">
          <LabelMain>Skills</LabelMain>
          Mi sección de tecnologías:
        </p>
        <div className={styles.containerCard}>
          <ImageCard icono="/html.svg" nombre="HTML" />
          <ImageCard icono="/css.svg" nombre="CSS" />
          <ImageCard icono="/javascript.svg" nombre="JavaScript" />
          <ImageCard icono="/git.svg" nombre="Git" />
          <ImageCard icono="/github.svg" nombre="GitHub" />
          <ImageCard icono="/react.svg" nombre="React JS" />
          <ImageCard icono="/next-js.svg" nombre="Next JS" />
          <ImageCard icono="/tailwind.svg" nombre="TailwindCSS" />
          <ImageCard icono="/sass.svg" nombre="Sass" />
          <ImageCard icono="/express.svg" nombre="Express" />
          <ImageCard icono="/nodejs.svg" nombre="Node JS" />
          <ImageCard icono="/typescript.svg" nombre="TypeScript" />
        </div>
      </div>
    </ContainerPrimary>
  );
};
