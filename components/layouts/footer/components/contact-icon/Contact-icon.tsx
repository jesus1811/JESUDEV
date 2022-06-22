import { useContext } from "react";
import ThemeContext from "../../../../../store/theme/ThemeContext";
import styles from "./styles.module.scss";

interface Props {
  enlace: string;
  icon: string;
}
export const ContactIcon = ({ enlace, icon }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <a href={enlace} target="_blank" rel="noreferrer">
      <img
        src={theme ? "/" + icon + "-light.svg" : "/" + icon + ".svg"}
        alt=""
        data-aos="fade-up"
        className={styles.image}
      />
    </a>
  );
};
