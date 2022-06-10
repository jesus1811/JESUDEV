import { useState } from "react";
import { ButtonPrimary, ContainerPrimary, LabelMain, ProjectCard } from "../../common";
import styles from "./project.module.scss";

export const Project = () => {
  const [onProyecto, setOnProyecto] = useState(true);
  return (
    <ContainerPrimary className="proyect" color="bgDarkPrimary">
      <div className={styles.containerDiv}>
        <LabelMain>Proyectos</LabelMain>
        <div className={styles.containerButton} data-aos="fade-up">
          <ButtonPrimary onClick={() => setOnProyecto(true)}>Proyectos Personales</ButtonPrimary>
          <ButtonPrimary onClick={() => setOnProyecto(false)}>Proyectos Laborales</ButtonPrimary>
        </div>

        <div className={styles.containerCard}>
          {onProyecto ? (
            <>
              <ProjectCard
                icon="/pokedex.png"
                href="https://pokedex-nextjs-jesudev.vercel.app/"
                description="Esta aplicacion la realize de forma estatica(Static Side Generation)
             haciendo uso de la popular API de pokemones"
                tegnologia="NEXTJS-TAILWIND"
              >
                Pokedex
              </ProjectCard>
              <ProjectCard
                icon="/multi-task.png"
                href="https://jesudevtodolist.netlify.app"
                description="Aplicacion simple pero es la 
            forma mas practica de demostrar el uso de estado y persistencia en React"
                tegnologia="REACT-CSS"
              >
                To Do List
              </ProjectCard>
              <ProjectCard
                icon="/loginGoogle.png"
                href="https://jesus1811.github.io/login-auth/"
                description="Aplicacion consumiendo la API de google para una mejor autenticacion"
                tegnologia="REACT-CSS-FIREBASE"
              >
                Google Auth
              </ProjectCard>
              <ProjectCard
                icon="/lading-page-ui-ux.svg"
                href="https://template1-tegnology.netlify.app"
                description="Ten presencia en la web para mejorar las ventas,
             aca en JESUDEV adaptamos el diseño a tu nesesidad"
                tegnologia="TAILWIND-HTML-JAVASCRIPT"
              >
                Landing Page Technology
              </ProjectCard>
              <ProjectCard
                icon="/coffee.png"
                href="https://cofee-template2.netlify.app/"
                description="Ten presencia en la web para mejorar las ventas, 
            aca en JESUDEV adaptamos el diseño a tu nesesidad"
                tegnologia="TAILWIND-HTML-JAVASCRIPT"
              >
                Landing Page Coffee
              </ProjectCard>
              <ProjectCard
                icon="/side-bar-01.png"
                href="https://side-bar-01.vercel.app/"
                description="He desarrollado esta plantilla de un sideBar de 
            forma escalable con la intencion de reutilizarlo cuando lo nesesite"
                tegnologia="NEXTJS-TAILWIND"
              >
                Side-Bar
              </ProjectCard>
            </>
          ) : (
            <>
              <ProjectCard
                icon="/ossi.png"
                href="https://osii-freelance.netlify.app/"
                description="desarrollado para la empresa OSII EIRL, empresa del rubro de metalmecanica"
                tegnologia="HTML-CSS-JAVASCRIPT"
              >
                landing Page Ossi
              </ProjectCard>
              <ProjectCard
                icon="/promedio-notas.png"
                href="https://promedio-nota.up.railway.app/"
                description="sistema en venta para tareas academicas, incluye codigo fuente y documentacion"
                tegnologia="NEXT-NODE-MYSQL-EXPRESS-SASS"
              >
                Sistema de gestion de estudiantes
              </ProjectCard>
              <ProjectCard
                icon="/consigueVentas.jfif"
                href="https://promedio-notas.vercel.app"
                description="colabore en equipo para la empresa CONSIGUE VENTAS EIRL con el rol de programador front-end"
                tegnologia="LARAVEL-REACT-PHP-MYSQL"
              >
                Sistema de Asistencia
              </ProjectCard>
            </>
          )}
        </div>
      </div>
    </ContainerPrimary>
  );
};
