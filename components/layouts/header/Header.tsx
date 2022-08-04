import { useContext } from "react";
import { Link } from "react-scroll";
import styles from "./header.module.scss";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ThemeContext from "../../../store/theme/ThemeContext";
export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    // alert("en mantenimiento...")
    setTheme(!theme);
  };
  return (
    <section className={theme ? styles.container_light : styles.container}>
      <div className={styles.containerDiv}>
        <input type="checkbox" id="check" className={styles.checkedNav} />
        <img src="/jesuDev.ico" alt="jesudev" style={{ width: "70px" }} />
        <Link to="inicio" smooth={true} className={theme ? styles.linkMain_ligth : styles.linkMain}>
          JesuDev
        </Link>

        <label htmlFor="check" className="btnCheck">
          <img src="menu.svg" alt="" className={styles.image} />
        </label>
        <nav className={theme ? styles.navigation_light : styles.navigation}>
          <Link to="about" smooth={true} className={theme ? styles.link_ligth : styles.link}>
            Sobre Mi
          </Link>
          <Link to="skill" smooth={true} className={theme ? styles.link_ligth : styles.link}>
            Skills
          </Link>
          <Link to="proyect" smooth={true} className={theme ? styles.link_ligth : styles.link}>
            Proyectos
          </Link>
          <Link to="contact" smooth={true} className={theme ? styles.link_ligth : styles.link}>
            Contactos
          </Link>
          {/* <DarkModeSwitch sunColor="white" size={35} checked={theme} onChange={toggleTheme} /> */}
        </nav>
      </div>
    </section>
  );
};
