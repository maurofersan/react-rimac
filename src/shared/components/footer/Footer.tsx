import styles from "./Footer.module.scss";
import rimacBlackImg from "@/assets/rimac-white.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <img
        className={styles.footer__image}
        src={rimacBlackImg}
        alt="Rimac logo"
      />
      <h2 className={styles.footer__text}>
        © 2024 RIMAC Seguros y Reaseguros.
      </h2>
    </footer>
  );
};
