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
            Soy full stack junior developer especializándome en ReactJS y nodeJS y la maquetación responsive, cuento con
            6 meses de experiencia en trabajo remoto en equipo creando aplicaciones web y landing page personalizadas,
            me caracterizo por ser autodidacta, leer mucha documentación y seguir buenas prácticas.
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
