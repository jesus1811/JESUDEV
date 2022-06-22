import { useContext, useEffect } from "react";
import { init } from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";
import { LinkPrimary } from "../../../../common";
import ThemeContext from "../../../../../store/theme/ThemeContext";

export interface Props {
  children: string;
  icon: string;
  description: string;
  tegnologia: string;
  href: string;
  repositorio: string;
}
export const ProjectCard = ({ children, icon, description, tegnologia, href, repositorio }: Props) => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in" className={styles.container}>
      <h2 className={styles.title}>{children}</h2>
      <img className={styles.image} src={icon} />
      <div className={theme ? styles.containerText_ligth : styles.containerText}>
        <p className={theme ? styles.description_ligth : styles.description}>{description}</p>
        <span className={theme ? styles.tecnologia_ligth : styles.tecnologia}>{tegnologia}</span>
        <div className={styles.containerButtons}>
          <LinkPrimary href={href}>demo</LinkPrimary>
          <a href={repositorio} target="_blank" rel="noreferrer">
            <img
              className={theme ? styles.repositorio_linght : styles.repositorio}
              src={theme ? "/github-light.svg" : "/github.svg"}
              alt="repositorio github"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
