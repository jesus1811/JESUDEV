import { LabelMain, LinkCard } from "../common";
import { useEffect } from "react";
import { init } from "aos";
import "aos/dist/aos.css";


export const Footer = () => {
    useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <section
      className="contact flex flex-col justify-around items-center w-full
 bg-[#20232a] py-[50px] gap-[30px] min-h-[77vh]"
    >
      <LabelMain>Contactos</LabelMain>
      <div
        className="flex flex-col justify-center items-center 
  w-9/12 h-full gap-[30px]"
      >
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] 
    justify-items-center items-center w-full gap-[30px]"
        >
          <LinkCard icon="/whatsapp.svg" enlace="https://wa.me/51936129604" />
          <LinkCard
            icon="/linkedin.svg"
            enlace="https://www.linkedin.com/in/jesus-ayarza/"
          />
          <LinkCard icon="/telegram.svg" enlace="https://t.me/jesusA1811" />
          <LinkCard icon="/github.svg" enlace="https://github.com/jesus1811" />
        </div>
        
      </div>
      <div className="copy">
          <p className="text-white text-xl text-center">
            ©| JesuDev 2021 todos los derechos reservados |
          </p>
        </div>
    </section>
  );
};
