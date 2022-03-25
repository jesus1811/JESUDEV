import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      className="hero w-full min-h-screen flex flex-col justify-center 
  items-center fixed left-0 top-0 -z-50"
    >
      <Image
        className="w-full h-screen object-cover absolute -z-10
    [filter:brightness(45%)]"
        src="/fondo.jpg"
        layout="fill"
      />
      <div className="flex flex-col justify-center items-center gap-5">
        <h2
          className="lg:text-6xl text-[45px] text-[#61dafb] font-semibold"
          data-aos="fade-up"
        >
          Jesus Ayarza
        </h2>
        <p className="lg:text-3xl text-[22px] text-white" data-aos="fade-up">
          Front End Developer - React
        </p>
      </div>
    </section>
  );
};
