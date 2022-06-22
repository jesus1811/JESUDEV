import Aos from "aos";
import Image from "next/image";
import { useContext, useEffect } from "react";
import ThemeContext from "../../../store/theme/ThemeContext";
import styles from "./hero.module.scss";
export const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={styles.container + " hero"}>
      <Image src="/fondo.jpg" className={styles.image} layout="fill" />
      <div className={styles.containerCard}>
        <h1 className={theme ? styles.nombre_ligth : styles.nombre}>
          Jesus Ayarza
        </h1>
        <p className={styles.rol} data-aos="fade-up">
          Full Stack Junior - JavaScript
        </p>
      </div>
    </section>
  );
};
