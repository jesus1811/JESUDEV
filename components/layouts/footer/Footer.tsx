import { LabelMain, LinkCard } from "../../common";
import { useEffect } from "react";
import { init } from "aos";
import "aos/dist/aos.css";
import styles from "./footer.module.scss";

export const Footer = () => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <section className={styles.container + " contact"}>
      <LabelMain>Contactos</LabelMain>
      <div className={styles.containerDiv}>
        <div className={styles.containerCard}>
          <LinkCard icon="/whatsapp.svg" enlace="https://wa.me/51936129604" />
          <LinkCard
            icon="/linkedin.svg"
            enlace="https://www.linkedin.com/in/jesus-ayarza/"
          />
          <LinkCard icon="/telegram.svg" enlace="https://t.me/jesusA1811" />
          <LinkCard icon="/github.svg" enlace="https://github.com/jesus1811" />
        </div>
      </div>
      <p className={styles.copy}>
        ©| JesuDev 2021 todos los derechos reservados |
      </p>
    </section>
  );
};
