import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./hero.module.scss";
export const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className={styles.container + " hero"}>
      <Image src="/fondo.jpg" className={styles.image} layout="fill" />
      <div className={styles.containerCard}>
        <h1 className={styles.nombre} data-aos="fade-up">
          Jesus Ayarza
        </h1>
        <p className={styles.rol} data-aos="fade-up">
          Front End Developer - React
        </p>
      </div>
    </section>
  );
};
