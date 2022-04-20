import styles from "./linkPrimary.module.scss";

interface Props {
  children: string;
  href: string;
}

export const LinkPrimary = ({ children, href }: Props) => {
  return (
    <a
      href={href}
      className={styles.link}
      target="_blank"
      rel="noreferrer"
      download="descarga"
    >
      {children}
    </a>
  );
};
