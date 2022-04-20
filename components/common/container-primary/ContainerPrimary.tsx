import React from "react";
import styles from "./containerPrimary.module.scss";
interface Props {
  children: JSX.Element;
  className?: string;
  color: string;
}

export const ContainerPrimary = ({ children, className, color }: Props) => {
  return <div className={styles[color] + " " + className}>{children}</div>;
};
