import styles from "./buttonPrimary.module.scss";
interface Props {
  children: String;
  onClick: VoidFunction;
}

export const ButtonPrimary = ({ children, onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
