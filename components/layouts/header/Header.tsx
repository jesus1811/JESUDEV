import { Link } from "react-scroll";
import { LinkNav } from "../../common";
import styles from "./header.module.scss"

export const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerDiv}>
        <input type="checkbox" id="check" className={styles.checkedNav} />
        <Link to="inicio" smooth={true} className={styles.link}>
          JesuDev
        </Link>
        <label htmlFor="check" className="btnCheck">
          <img src="menu.svg" alt="" className={styles.image} />
        </label>
        <nav className={styles.navigation+" "}>
          <LinkNav to="about">Sobre Mi</LinkNav>
          <LinkNav to="skill">Skills</LinkNav>
          <LinkNav to="proyect">Proyectos</LinkNav>
          <LinkNav to="contact">Contactos</LinkNav>
        </nav>
      </div>
    </section>
  );
};
