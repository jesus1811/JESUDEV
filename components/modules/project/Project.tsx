import { ContainerPrimary, LabelMain, ProjectCard } from "../../common";
import styles from "./project.module.scss";

export const Project = () => {
  return (
    <ContainerPrimary className="proyect" color="bgDarkPrimary">
      <div className={styles.containerDiv}>
        <LabelMain>Proyectos</LabelMain>
        <div className={styles.containerCard}>
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
            icon="/promedio-notas.png"
            href="https://promedio-notas.vercel.app"
            description="Problemas con tu tarea academica? aca en JESUDEV contamos con un sistema ideal"
            tegnologia="NEXT-NODE-MYSQL-EXPRESS"
          >
            Sistema de Promedios
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
        </div>
      </div>
    </ContainerPrimary>
  );
};
