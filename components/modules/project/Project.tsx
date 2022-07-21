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
            icon="/service-comerce.png"
            href="https://service-comerce.vercel.app/"
            repositorio="https://github.com/jesus1811/entregable03-front.git"
            description="Aplicacion web de servicios, cuenta con historial, y administracion de los servicios de cada usuario"
            tegnologia="NEXTJS-STYLED COMPONENTS-FIREBASE-EXPRESS-MYSQL (MERN)"
          >
            Service-commerce
          </ProjectCard>
          <ProjectCard
            icon="/inventory.png"
            href="https://inventory-frontend-tau.vercel.app/"
            repositorio="https://github.com/jesus1811/inventory-frontend"
            description="Aplicacion web de administracion de productos con stock e imagenes"
            tegnologia="REACT-NEXT-SASS-FIREBASE-EXPRESS-POSTGRESQL (PERN)"
          >
            Inventory
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
            tegnologia="NEXT-NODE-MYSQL-EXPRESS-SASS (MERN)"
          >
            Notes
          </ProjectCard>
          <ProjectCard
            icon="/galery-image.png"
            href="https://galery-images.vercel.app/"
            repositorio="https://github.com/jesus1811/galery-photos.git"
            description="Aplicacion web de galeria de imagenes almacenandose en el localStorage"
            tegnologia="NEXT-SASS-REACT-FIREBASE"
          >
            Image Gallery
          </ProjectCard>
          <ProjectCard
            icon="/ossi.png"
            href="https://osii-freelance.netlify.app/"
            repositorio="https://github.com/jesus1811/ossi"
            description="desarrollado para la empresa OSII EIRL, empresa del rubro de metalmecanica"
            tegnologia="HTML-CSS-JAVASCRIPT"
          >
            Ossi
          </ProjectCard>
        </div>
      </div>
    </ContainerPrimary>
  );
};
