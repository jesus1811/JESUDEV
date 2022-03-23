import { LabelMain, ProjectCard } from "../common";

export const Project = () => {
  return (
    <section
      className="proyect w-full min-h-screen bg-[#282c34] flex flex-col 
  justify-center items-center pt-[72px] pb-[40px]"
    >
      <div
        className="w-9/12 h-full flex flex-col justify-evenly 
    items-center gap-8"
      >
        <LabelMain title={"Proyectos"} />
        <div
          className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]
       justify-items-center items-center w-full gap-[30px]"
        >
          <ProjectCard
            title="Buscador de Pokemones"
            icon="/poke-api.png"
            href="https://jesus1811.github.io/buscadorPokemon"
            description="Esta aplicacion lo hice usando la famosa API de pokemon"
            tegnologia="REACT-SASS"
          />
          <ProjectCard
            title="To Do List"
            icon="/multi-task.png"
            href="https://jesudevtodolist.netlify.app"
            description="Aplicacion simple pero es la 
            forma mas practica de demostrar el uso de estado y persistencia en React"
            tegnologia="REACT-CSS"
          />
          <ProjectCard
            title="Google Auth"
            icon="/loginGoogle.png"
            href="https://jesus1811.github.io/login-auth/"
            description="Aplicacion consumiendo la API de google para una mejor autenticacion"
            tegnologia="REACT-CSS-FIREBASE"
          />
          <ProjectCard
            title="Landing Page Technology"
            icon="/lading-page-ui-ux.svg"
            href="https://template1-tegnology.netlify.app"
            description="Ten presencia en la web para mejorar las ventas,
             aca en JESUDEV adaptamos el diseño a tu nesesidad"
            tegnologia="TAILWIND-HTML-JAVASCRIPT"
          />
          <ProjectCard
            title="Sistema de Promedios"
            icon="/promedio-notas.png"
            href="https://promedio-notas.vercel.app"
            description="Problemas con tu tarea academica? aca en JESUDEV contamos con un sistema ideal"
            tegnologia="NEXT-NODE-MYSQL-EXPRESS"
          />
          <ProjectCard
            title="Landing Page Coffee"
            icon="/coffee.png"
            href="https://cofee-template2.netlify.app/"
            description="Ten presencia en la web para mejorar las ventas, 
            aca en JESUDEV adaptamos el diseño a tu nesesidad"
            tegnologia="TAILWIND-HTML-JAVASCRIPT"
          />
          <ProjectCard
            title="Side-Bar"
            icon="/side-bar-01.png"
            href="https://side-bar-01.vercel.app/"
            description="He desarrollado esta plantilla de un sideBar de 
            forma escalable con la intencion de reutilizarlo cuando lo nesesite"
            tegnologia="NEXTJS-TAILWIND"
          />
        </div>
      </div>
    </section>
  );
};
