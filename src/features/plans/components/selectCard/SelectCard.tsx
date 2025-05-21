import styles from "./SelectCard.module.scss";
import { Checkbox } from "@/shared/components/checkbox/Checkbox";

interface SelectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  selected: boolean;
  onSelect: () => void;
}

export const SelectCard = ({
  title,
  description,
  imageUrl,
  selected,
  onSelect,
}: SelectCardProps) => {
  return (
    <div
      className={`${styles.card} ${selected ? styles["card--selected"] : ""}`}
      onClick={onSelect}
    >
      <div className={styles.card__checkbox}>
        <Checkbox checked={selected} secondary onChange={onSelect} />
      </div>
      <div className={styles["card__title-container"]}>
        <img src={imageUrl} alt={title} className={styles.card__image} />
        <h3 className={styles.card__title}>{title}</h3>
      </div>
      <p className={styles.card__description}>{description}</p>
    </div>
  );
};
