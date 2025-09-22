import UserForm from "@/features/users/components/user-form/UserForm";
import styles from "./UserPage.module.scss";
import familyImg from "@/assets/family.png";
import { Footer } from "@/shared/components/footer/Footer";

export const UserPage = () => {
  return (
    <div className={styles.user}>
      <div className={styles.user__page}>
        <main className={styles.user__container}>
          <div className={styles["user__image-container"]}>
            <div className={styles["user__title-container--mobile"]}>
              <span className={styles.user__tagline}>
                Seguro Salud Flexible
              </span>
              <h1 className={styles.user__title}>
                Creado para ti y tu familia
              </h1>
            </div>
            <img className={styles.user__image} src={familyImg} alt="family" />
          </div>
          <div>
            <div className={styles["user__title-container"]}>
              <span className={styles.user__tagline}>
                Seguro Salud Flexible
              </span>
              <h1 className={styles.user__title}>
                Creado para ti y tu familia
              </h1>
            </div>
            <h2 className={styles.user__subtitle}>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </h2>
            <UserForm />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
