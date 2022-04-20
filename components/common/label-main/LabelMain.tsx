import { useEffect } from "react";
import { init } from "aos";
import styles from "./labelMain.module.scss";
interface Props {
  children: string;
}
export const LabelMain = ({ children }: Props) => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <h2 data-aos="fade-up" className={styles.title}>
      {children}
    </h2>
  );
};
