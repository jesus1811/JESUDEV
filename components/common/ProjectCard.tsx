import { useEffect } from "react";
import { init } from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { LinkPrimary } from "./LinkPrimary";
interface Props {
  children: string;
  icon: string;
  description: string;
  tegnologia: string;
  href: string;
}

export const ProjectCard = ({
  children,
  icon,
  description,
  tegnologia,
  href,
}: Props) => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-full h-full gap-[25px]"
        data-aos="zoom-in"
      >
        <p className="text-xl text-white text-center z-[3]">{children}</p>
        <Image
          src={icon}
          width="250"
          height="250"
          className="object-cover rounded-[4px]"
        />
        <div
          className="flex flex-col opacity-0 z-[2] justify-around items-center
        absolute w-[250px] h-[250px] p-5 bottom-0  bg-[#282c34] 
        transition-all hover:opacity-[1] border-2  rounded-[4px]"
        >
          <p className="text-white text-center z-[3] text-[16px]">
            {description}
          </p>
          <span className="text-[18px] text-[#61dafb] text-center">
            {tegnologia}
          </span>
          <br />
          {/* <LinkPrimary title="Ir al sitio Web" href={href} /> */}
          <LinkPrimary href={href}>Ir al sitio Web</LinkPrimary>
        </div>
      </div>
    </>
  );
};
