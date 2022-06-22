import { useContext, useEffect } from "react";
import { init } from "aos";
import styles from "./labelMain.module.scss";
import ThemeContext from "../../../store/theme/ThemeContext";
interface Props {
  children: string;
}
export const LabelMain = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <h2 data-aos="fade-up" className={theme ? styles.title_light : styles.title}>
      {children}
    </h2>
  );
};
