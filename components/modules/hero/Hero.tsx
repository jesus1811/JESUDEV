import Aos from "aos";
import { useEffect } from "react";
import { Container, ContainerCard, ImageNext, Nombre, Rol } from "./styles";

export const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container className="hero">
      <ImageNext src="/fondo.jpg" layout="fill" />
      <ContainerCard>
        <Nombre data-aos="fade-up">Jesus Ayarza</Nombre>
        <Rol data-aos="fade-up">Front End Developer - React</Rol>
      </ContainerCard>
    </Container>
  );
};
