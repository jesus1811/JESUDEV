import { ContainerPrimary, LabelMain, LinkPrimary, LinkTransparent } from "../../common";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <>
      <div className={styles.referencia + " inicio"}></div>
      <ContainerPrimary className="about" color="bgDarkPrimary">
        <div className={styles.container}>
          <LabelMain>Sobre Mi</LabelMain>
          <p data-aos="fade-up" className={styles.description}>
            Soy FULL STACK JUNIOR titulado en la carrera de DESARROLLO DE SOFTWARE especializándome en REACT.JS, NODE.JS
            y la maquetación RESONSIVE, cuento con 1 año de EXPERIENCIA en trabajo REMOTO creando aplicaciones web y
            landing page personalizadas, me caracterizo por ser autodidacta, leer mucha documentación y seguir buenas
            prácticas.
          </p>
          <div data-aos="fade-up" className={styles.containerButton}>
            <LinkPrimary href="https://jesus1811.github.io/cv/JesusAyarzaCV.pdf">Descargar CV</LinkPrimary>
            <LinkTransparent to="contact">Contactame</LinkTransparent>
          </div>
        </div>
      </ContainerPrimary>
    </>
  );
};
