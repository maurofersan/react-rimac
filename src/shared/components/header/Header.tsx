import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Header.module.scss";
import rimacImg from "@/assets/rimac-red.svg";

export const Header = () => {
  return (
    <header className={styles.header__container}>
      <img className={styles.header__image} src={rimacImg} alt="Rimac logo" />
      <div className={styles.header__info}>
        <span className={styles.header__text}>¡Compra por este medio!</span>
        <span className={styles.header__phone}>
          <FaPhoneAlt /> (01) 411 6001
        </span>
      </div>
    </header>
  );
};
