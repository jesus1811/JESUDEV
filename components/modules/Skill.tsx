import { ImageCard, LabelMain } from "../common";

export const Skill = () => {
  return (
    <section
      className="skill w-full min-h-screen bg-[#20232a] 
    flex flex-col justify-center items-center pt-[72px] pb-16"
    >
      <div
        className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]
     justify-items-stretch items-center w-9/12 h-[65%] gap-[30px]"
      >
        <p
          className="text-[20px] text-white flex flex-col justify-center text-justify 
          gap-2"
          data-aos="fade-right"
        >
          <LabelMain>Skills</LabelMain>
          Mi sección de tecnologías:
        </p>
        <div
          className="grid [grid-template-columns:repeat(auto-fit,minmax(85px,1fr))] 
        justify-items-stretch items-center w-full gap-12"
        >
          <ImageCard icono="/html.svg" nombre="HTML" />
          <ImageCard icono="/css.svg" nombre="CSS" />
          <ImageCard icono="/javascript.svg" nombre="JavaScript" />
          <ImageCard icono="/git.svg" nombre="Git" />
          <ImageCard icono="/github.svg" nombre="GitHub" />
          <ImageCard icono="/react.svg" nombre="React JS" />
          <ImageCard icono="/next-js.svg" nombre="Next JS" />
          <ImageCard icono="/tailwind.svg" nombre="Tailwind" />
          <ImageCard icono="/sass.svg" nombre="Sass" />
          <ImageCard icono="/npm.svg" nombre="NPM" />
          <ImageCard icono="/nodejs.svg" nombre="Node JS" />
          <ImageCard icono="/gitlab.svg" nombre="GitLab" />
        </div>
      </div>
    </section>
  );
};
