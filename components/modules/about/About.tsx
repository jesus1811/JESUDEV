import { useContext } from "react";
import ThemeContext from "../../../store/theme/ThemeContext";
import {
  ContainerPrimary,
  LabelMain,
  LinkPrimary,
  LinkTransparent,
} from "../../common";
import styles from "./about.module.scss";

export const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={styles.referencia + " inicio"}></div>
      <ContainerPrimary className="about">
        <div className={styles.container}>
          <LabelMain>¿Quién soy?</LabelMain>
          <p
            data-aos="fade-up"
            className={theme ? styles.description_ligth : styles.description}
          >
            Desarrollador Front End con capacidad de realizar proyectos reales
            en el entorno de React, NodeJS y Express, teniendo siempre en mente
            que sean escalables y modulares, para así poder lograr proyectos de
            calidad.
          </p>
          <LabelMain>¿Por que yo?</LabelMain>
          <p
            data-aos="fade-up"
            className={theme ? styles.description_ligth : styles.description}
          >
            Soy un desarrollador con solidos conocimientos técnicos y 1 año de
            experiencia además de ser autodidacta que le gusta seguir
            aprendiendo de los demás y también me gusta compartir mis
            conocimientos e interactuar con la comunidad.
          </p>
          <div data-aos="fade-up" className={styles.containerButton}>
            <LinkPrimary href="https://jesus1811.github.io/cv/JesusAyarza.pdf">
              Descargar CV
            </LinkPrimary>
            <LinkTransparent data-aos="fade-up" to="contact">
              Contactame
            </LinkTransparent>
          </div>
        </div>
      </ContainerPrimary>
    </>
  );
};
