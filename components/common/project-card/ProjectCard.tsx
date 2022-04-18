import { useEffect } from "react";
import { init } from "aos";
import "aos/dist/aos.css";
import { LinkPrimary } from "../link-primary/LinkPrimary";
import { Container, Div, ImageNext, P, Span, Title } from "./styles";
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
      <Container data-aos="zoom-in">
        <Title>{children}</Title>
        <ImageNext src={icon} width="250" height="250" />
        <Div>
          <P>{description}</P>
          <Span>{tegnologia}</Span>
          <LinkPrimary href={href}>Ir al sitio Web</LinkPrimary>
        </Div>
      </Container>
    </>
  );
};
