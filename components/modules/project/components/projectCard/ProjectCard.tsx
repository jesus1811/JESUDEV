import { useEffect } from "react";
import { init } from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";
import { LinkPrimary } from "../../../../common";

export interface Props {
  children: string;
  icon: string;
  description: string;
  tegnologia: string;
  href: string;
  repositorio: string;
}
export const ProjectCard = ({ children, icon, description, tegnologia, href, repositorio }: Props) => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in" className={styles.container}>
      <h2 className={styles.title}>{children}</h2>
      <img className={styles.image} src={icon} />
      <div className={styles.containerText}>
        <p className={styles.description}>{description}</p>
        <span className={styles.tecnologia}>{tegnologia}</span>
        <div className={styles.containerButtons}>
          <LinkPrimary href={href}>demo</LinkPrimary>
          <a href={repositorio} target="_blank" rel="noreferrer">
            <img className={styles.repositorio} src="/github.svg" alt="repositorio github" />
          </a>
        </div>
      </div>
    </div>
  );
};
