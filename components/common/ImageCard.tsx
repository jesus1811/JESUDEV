import { useEffect } from "react";
import "aos/dist/aos.css";
import { init } from "aos";
import Image from "next/image";

interface Props {
  icono: string;
  nombre: string;
}

export const ImageCard = ({ icono, nombre }: Props) => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 w-full"
      data-aos="zoom-in"
    >
      <Image src={icono} className="w-full" width="100%" height="100%" />
      <p className="text-white text-xl font-light">{nombre}</p>
    </div>
  );
};
