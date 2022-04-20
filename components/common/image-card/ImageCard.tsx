import { useEffect } from "react";
import "aos/dist/aos.css";
import { init } from "aos";
import Image from "next/image";
import styles from "./imageCard.module.scss";

interface Props {
  icono: string;
  nombre: string;
}

export const ImageCard = ({ icono, nombre }: Props) => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.container} data-aos="zoom-in">
      <Image src={icono} width="100%" height="100%" className={styles.image} />
      <p className={styles.parrafo}>{nombre}</p>
    </div>
  );
};
