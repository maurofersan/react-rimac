import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import styles from "./Back.module.scss";

interface BackProps {
  onBack?: () => void;
}

export const Back = ({ onBack }: BackProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onBack?.();
    navigate(-1);
  };

  return (
    <button className={styles.back__container} onClick={handleClick}>
      <div className={styles.back__icon}>
        <FiChevronLeft color="#4f4fff" size={14} />
      </div>
      <span>Volver</span>
    </button>
  );
};
