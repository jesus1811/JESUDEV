import { useContext } from "react";
import ThemeContext from "../../../store/theme/ThemeContext";
import { ContainerPrimary, LabelMain, LinkPrimary, LinkTransparent } from "../../common";
import styles from "./about.module.scss";

export const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={styles.referencia + " inicio"}></div>
      <ContainerPrimary className="about">
        <div className={styles.container}>
          <LabelMain>Sobre Mi</LabelMain>
          <p data-aos="fade-up" className={theme ? styles.description_ligth : styles.description}>
            Soy desarrollador full stack junior titulado de la carrera de Desarrollo de Software actualmente cuento con
            1 año de experiencia demostrable especializándome en el entorno de React.js y Nodejs, me caracterizo por ser
            autodidacta y seguir buenas practicas mediante el código limpio.
          </p>
          <div data-aos="fade-up" className={styles.containerButton}>
            <LinkPrimary href="https://jesus1811.github.io/cv/JesusAyarzaCV.pdf">Descargar CV</LinkPrimary>
            <LinkTransparent data-aos="fade-up" to="contact">
              Contactame
            </LinkTransparent>
          </div>
        </div>
      </ContainerPrimary>
    </>
  );
};
