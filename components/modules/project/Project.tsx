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
            repositorio="https://github.com/jesus1811/service-comerce.git"
            description="Aplicacion web de servicios, cuenta con historial, y administracion de los servicios de cada usuario"
            tegnologia="NEXTJS-STYLED COMPONENTS-FIREBASE-EXPRESS-MYSQL (MERN)"
          >
            Service-commerce
          </ProjectCard>
          <ProjectCard
            icon="/inventory.png"
            href="https://inventory-frontend-tau.vercel.app/"
            repositorio="https://github.com/jesus1811/inventory.git"
            description="Aplicacion web de administracion de productos con stock e imagenes"
            tegnologia="REACT-NEXT-SASS-FIREBASE-EXPRESS-POSTGRESQL (PERN)"
          >
            Inventory
          </ProjectCard>
          <ProjectCard
            icon="/auth-google.png"
            href="https://auth-login.vercel.app/"
            repositorio="https://github.com/jesus1811/auth.git"
            description="Aplicacion web de autenticación de usuario "
            tegnologia="REACT-CSS"
          >
            Auth Google
          </ProjectCard>
          <ProjectCard
            icon="/promedio-notas.png"
            href="https://promedio-notas.vercel.app/"
            repositorio="https://github.com/jesus1811/notes.git"
            description="Aplicacion web para administrar notas de estudiantes"
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
            icon="/secret-chat.png"
            href="https://secret-chat-jesudev.vercel.app/"
            repositorio="https://github.com/jesus1811/ossi"
            description="aplicacion web de chat con salas el cual podras enviar mensajes e interactuar con grupos de amigos"
            tegnologia="NEXTJS-STYLED COMPONENTS-FIREBASE-EXPRESS-POSTGRESQL (PERN)"
          >
            Secret Chat
          </ProjectCard>
        </div>
      </div>
    </ContainerPrimary>
  );
};
