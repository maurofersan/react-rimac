import UserForm from "@/features/users/components/UserForm";
import styles from "./UserPage.module.scss";
import familyImg from "@/assets/family.png";
import { Footer } from "@/shared/components/footer/Footer";
import { Header } from "@/shared/components/header/Header";

export const UserPage = () => {
  return (
    <div className={styles.user}>
      <div className={styles.user__page}>
        <Header />
        <main className={styles.user__container}>
          <img className={styles.user__image} src={familyImg} alt="family" />
          <div>
            <h1 className={styles.user__title}>Creado para ti y tu familia</h1>
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
