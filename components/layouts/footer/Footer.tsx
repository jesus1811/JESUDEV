import { LabelMain } from "../../common";
import { useEffect } from "react";
import { init } from "aos";
import styles from "./styles.module.scss";
import { ContactIcon } from "./components";

export const Footer = () => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <section className={styles.container + " contact"}>
      <LabelMain>Contactos</LabelMain>
      <div className={styles.containerDiv}>
        <div className={styles.containerCard}>
          <ContactIcon icon="whatsapp" enlace="https://wa.me/51936129604" />
          <ContactIcon icon="linkedin" enlace="https://www.linkedin.com/in/jesus-ayarza/" />
          <ContactIcon icon="telegram" enlace="https://t.me/jesusA1811" />
          <ContactIcon icon="github" enlace="https://github.com/jesus1811" />
        </div>
      </div>
      <p className={styles.copy}>©| JesuDev 2021 todos los derechos reservados |</p>
    </section>
  );
};
