import { useState } from "react";
import { ContainerPrimary, LabelMain } from "../../common";
import { ProjectCard } from "./components";
import styles from "./styles.module.scss";

export const Project = () => {
  return (
    <ContainerPrimary className="proyect">
      <div className={styles.content}>
        <LabelMain>Proyectos</LabelMain>
        <div className={styles.containerCard}>
          <ProjectCard
            icon="/pokedex.png"
            href="https://pokedex-nextjs-jesudev.vercel.app/"
            repositorio="https://github.com/jesus1811/PokedexNextjs"
            description="Esta aplicacion la realize de forma estatica(Static Side Generation)
             haciendo uso de la popular API de pokemones"
            tegnologia="NEXTJS-TAILWIND"
          >
            Pokedex
          </ProjectCard>
          <ProjectCard
            icon="/multi-task.png"
            href="https://jesudevtodolist.netlify.app"
            repositorio="https://github.com/jesus1811/rep-to-do-lis"
            description="Aplicacion simple pero el objetivo es de demostrar el uso de estado y persistencia en React"
            tegnologia="REACT-CSS"
          >
            To Do List
          </ProjectCard>
          <ProjectCard
            icon="/loginGoogle.png"
            href="https://jesus1811.github.io/login-auth/"
            repositorio="https://github.com/jesus1811/repo-login-auth"
            description="Login consumiendo la API de google para una mejor autenticacion"
            tegnologia="REACT-CSS-FIREBASE"
          >
            Google Auth
          </ProjectCard>
          <ProjectCard
            icon="/promedio-notas.png"
            href="https://promedio-notas.vercel.app/nota"
            repositorio="https://github.com/jesus1811/jesus1811-next-promedio-notas"
            description="aplicacion web para administrar notas de estudiantes"
            tegnologia="NEXT-NODE-MYSQL-EXPRESS-SASS"
          >
            Sistema de administracion de notas
          </ProjectCard>
          <ProjectCard
            icon="/consigueVentas.jfif"
            href="https://promedio-notas.vercel.app"
            repositorio="https://consigueventas.com/"
            description="colabore en equipo para la empresa CONSIGUE VENTAS EIRL con el rol de programador front-end"
            tegnologia="LARAVEL-REACT-PHP-MYSQL"
          >
            Sistema de Asistencia
          </ProjectCard>
          <ProjectCard
            icon="/ossi.png"
            href="https://osii-freelance.netlify.app/"
            repositorio="https://github.com/jesus1811/ossi"
            description="desarrollado para la empresa OSII EIRL, empresa del rubro de metalmecanica"
            tegnologia="HTML-CSS-JAVASCRIPT"
          >
            landing Page Ossi
          </ProjectCard>
        </div>
      </div>
    </ContainerPrimary>
  );
};
