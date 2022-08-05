import { useContext } from "react";
import ThemeContext from "../../../store/theme/ThemeContext";
import { ContainerPrimary, LabelMain } from "../../common";
import { Card } from "./components";
import styles from "./styles.module.scss";

export const Skill = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ContainerPrimary className="skill" variant>
      <div className={styles.containerDiv}>
        <p className={theme ? styles.parrafo_ligth : styles.parrafo} data-aos="fade-right">
          <LabelMain>Skills</LabelMain>
          Mi sección de tecnologías:
        </p>
        <div className={styles.containerCard}>
          <Card icono="html" nombre="HTML" />
          <Card icono="css" nombre="CSS" />
          <Card icono="javascript" nombre="JavaScript" />
          <Card icono="git" nombre="Git" />
          <Card icono="styled-component" nombre="Styled Components" />
          <Card icono="react" nombre="React JS" />
          <Card icono="next-js" nombre="Next JS" />
          <Card icono="tailwind" nombre="TailwindCSS" />
          <Card icono="sass" nombre="Sass" />
          <Card icono="express" nombre="Express" />
          <Card icono="nodejs" nombre="Node JS" />
          <Card icono="typescript" nombre="TypeScript" />
          <Card icono="redux" nombre="Redux" />
          <Card icono="jest" nombre="Jest" />
        </div>
      </div>
    </ContainerPrimary>
  );
};
