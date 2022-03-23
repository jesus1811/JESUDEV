import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const ImageCard = ({ icono, nombre }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 w-full"
      data-aos="zoom-in"
    >
      <Image
        src={icono}
        className="w-full"
        width="100%"
        height="100%"
      />
      <p className="text-white text-xl font-light">{nombre}</p>
    </div>
  );
};
