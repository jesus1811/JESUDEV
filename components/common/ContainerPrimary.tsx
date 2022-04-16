import React from "react";
interface Props {
  children: JSX.Element;
  className?: string;
  color: string;
}

export const ContainerPrimary = ({ children, className, color }: Props) => {
  return (
    <section
      className={
        className +
        " w-full min-h-screen " +
        color +
        " flex flex-col justify-center items-center pt-[72px] pb-[40px]"
      }
    >
      {children}
    </section>
  );
};
