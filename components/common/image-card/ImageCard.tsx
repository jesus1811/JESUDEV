import { useEffect } from "react";
import "aos/dist/aos.css";
import { init } from "aos";
import { Container,ImageNext, P } from "./styles";

interface Props {
  icono: string;
  nombre: string;
}

export const ImageCard = ({ icono, nombre }: Props) => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <Container data-aos="zoom-in">
      <ImageNext src={icono} width="100%" height="100%" />
      <P>{nombre}</P>
    </Container>
  );
};
