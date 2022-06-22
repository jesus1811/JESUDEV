import { useContext } from "react";
import { Link } from "react-scroll";
import ThemeContext from "../../../store/theme/ThemeContext";
import styles from "./linkTransparent.module.scss";
interface Props {
  children: string;
  to: string;
}
export const LinkTransparent = ({ children, to }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link to={to} smooth={true} className={theme ? styles.link_light : styles.link}>
      {children}
    </Link>
  );
};
