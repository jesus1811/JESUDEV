import { useContext } from "react";
import ThemeContext from "../../../store/theme/ThemeContext";
import styles from "./linkPrimary.module.scss";

interface Props {
  children: string;
  href: string;
}

export const LinkPrimary = ({ children, href }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <a
      href={href}
      className={theme ? styles.link_light : styles.link}
      target="_blank"
      rel="noreferrer"
      download="descarga"
    >
      {children}
    </a>
  );
};
