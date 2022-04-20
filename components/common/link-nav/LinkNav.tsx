import { Link } from "react-scroll";
import styles from "./linkNav.module.scss";

interface Props {
  children: string;
  to: string;
}

export const LinkNav = ({ children, to }: Props) => {
  return (
    <Link to={to} smooth={true} className={styles.link + " links__a"}>
      {children}
    </Link>
  );
};
