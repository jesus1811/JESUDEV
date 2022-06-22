import { useContext } from "react";
import ThemeContext from "../../../store/theme/ThemeContext";
import styles from "./containerPrimary.module.scss";
interface Props {
  children: JSX.Element;
  className?: string;
  variant?: boolean;
}

export const ContainerPrimary = ({ children, className, variant }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme
          ? variant
            ? styles.bgDarkSecundary_light
            : styles.bgDarkPrimary_light
          : (variant ? styles.bgDarkSecundary : styles.bgDarkPrimary) + " " + className
      }
    >
      {children}
    </div>
  );
};
