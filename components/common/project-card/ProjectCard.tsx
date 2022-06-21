import { useEffect } from "react";
import { init } from "aos";
import "aos/dist/aos.css";
import { LinkPrimary } from "../link-primary/LinkPrimary";
import Image from "next/image";
import styles from "./projectCard.module.scss";
import { LinkCard } from "../link-card/LinkCard";
interface Props {
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
    <>
      <div data-aos="zoom-in" className={styles.container}>
        <h2 className={styles.title}>{children}</h2>
        <Image className={styles.image} src={icon} width="250" height="250" />
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
    </>
  );
};
