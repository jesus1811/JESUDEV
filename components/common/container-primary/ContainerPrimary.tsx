import React from "react";
import { Container } from "./styles";
interface Props {
  children: JSX.Element;
  className?: string;
  color: string;
}

export const ContainerPrimary = ({
  children,
  className,
  color,
}: Props) => {
  return (
    <Container color={color}  className={className}>
      {children}
    </Container>
  );
};
