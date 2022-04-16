import {
  ContainerPrimary,
  LabelMain,
  LinkPrimary,
  LinkTransparent,
} from "../common";

export const About = () => {
  return (
    <>
      <div className="inicio h-screen"></div>
      <ContainerPrimary className="about" color="bg-[#282c34]">
        <div className="w-9/12 h-full flex flex-col justify-center items-center gap-20">
          <LabelMain>Sobre Mi</LabelMain>
          <p className="text-white text-[20px] text-justify" data-aos="fade-up">
            HELLO WORLD! I AM JESUS AYARZA Soy Front-end Developer
            especializándome en React JS y la maquetación responsive, tengo 6
            meses de experiencia en trabajo remoto en equipo creando
            aplicaciones web y landing page personalizadas, me caracterizo por
            ser autodidacta leer mucha documentación y seguir buenas practicas.
          </p>
          <div
            className="w-full grid justify-items-center items-center 
            [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-7"
            data-aos="fade-up"
          >
            <LinkPrimary href="https://jesus1811.github.io/cv/JesusAyarzaCV.pdf">
              Descargar CV
            </LinkPrimary>
            <LinkTransparent to="contact">Contactame</LinkTransparent>
          </div>
        </div>
      </ContainerPrimary>
    </>
  );
};
