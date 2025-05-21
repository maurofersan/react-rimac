import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import styles from "./Back.module.scss";

export const Back = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.back__container} onClick={() => navigate(-1)}>
      <div className={styles.back__icon}>
        <FiChevronLeft color="#4f4fff" size={14} />
      </div>
      <span>Volver</span>
    </button>
  );
};
