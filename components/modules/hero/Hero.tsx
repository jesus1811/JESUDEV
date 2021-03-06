import Image from "next/image";
import { useContext } from "react";
import ThemeContext from "../../../store/theme/ThemeContext";
import styles from "./hero.module.scss";
export const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={styles.container + " hero"}>
      <Image src="/fondo.jpg" className={styles.image} layout="fill" />
      <div className={styles.containerCard}>
        <h1 className={theme ? styles.nombre_ligth : styles.nombre} data-aos="fade-up">Jesus Ayarza</h1>
        <p className={styles.rol} data-aos="fade-up">
          Front end developer
        </p>
      </div>
    </section>
  );
};
