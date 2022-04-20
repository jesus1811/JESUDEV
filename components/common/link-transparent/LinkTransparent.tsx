import { Link } from "react-scroll";
import styles from "./linkTransparent.module.scss";
interface Props {
  children: string;
  to: string;
}
export const LinkTransparent = ({ children, to }: Props) => {
  return (
    <Link to={to} smooth={true} className={styles.link}>
      {children}
    </Link>
  );
};
