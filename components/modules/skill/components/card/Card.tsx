import { useContext, useEffect } from "react";
import { init } from "aos";
import styles from "./styles.module.scss";
import ThemeContext from "../../../../../store/theme/ThemeContext";

interface Props {
  icono: string;
  nombre: string;
}

export const Card = ({ icono, nombre }: Props) => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.card} data-aos="zoom-in">
      <img src={theme ? "/" + icono + "-light.svg" : "/" + icono + ".svg"} className={styles.image} />
      <p className={theme ? styles.parrafo_ligth : styles.parrafo}>{nombre}</p>
    </div>
  );
};
