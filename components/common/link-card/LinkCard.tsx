import styles from "./linkCard.module.scss";

interface Props {
  enlace: string;
  icon: string;
}
export const LinkCard = ({ enlace, icon }: Props) => {
  return (
    <a href={enlace} target="_blank" rel="noreferrer">
      <img src={icon} alt="" data-aos="fade-up" className={styles.image} />
    </a>
  );
};
