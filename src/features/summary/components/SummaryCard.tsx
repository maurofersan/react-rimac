import { FaUserFriends } from "react-icons/fa";
import styles from "./SummaryCard.module.scss";

interface SummaryCardProps {
  name: string;
  documentType: string;
  documentNumber: string;
  phone: string;
  planName: string;
  price: string;
}

export const SummaryCard = ({
  name,
  documentType,
  documentNumber,
  phone,
  planName,
  price,
}: SummaryCardProps) => {
  return (
    <div className={styles["summary-card"]}>
      <div className={styles["summary-card__header"]}>
        <p className={styles["summary-card__label"]}>
          Precios calculados para:
        </p>
        <h3 className={styles["summary-card__user-name"]}>
          <FaUserFriends size={22} /> {name}
        </h3>
      </div>

      <div className={styles["summary-card__info"]}>
        <p>
          <strong>Responsable de pago</strong>
        </p>
        <p>
          <label className={styles["summary-card__info--uppercase"]}>
            {documentType}:{" "}
          </label>
          <span>{documentNumber}</span>
        </p>
        <p>
          <label>Celular: </label>
          <span>{phone}</span>
        </p>
      </div>

      <div className={styles["summary-card__info"]}>
        <p>
          <strong>Plan elegido</strong>
        </p>
        <p>{planName}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
