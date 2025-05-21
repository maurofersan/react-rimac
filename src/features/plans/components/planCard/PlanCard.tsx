import { Button } from "@/shared/components";
import type { Plan } from "../../types";
import styles from "./PlanCard.module.scss";

interface PlanCardProps {
  plan: Plan;
  onSelect: (plan: Plan) => void;
}

export const PlanCard = ({ plan, onSelect }: PlanCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{plan.name}</h3>
      <h4 className={styles["card__price-title"]}>Costo del plan</h4>
      <p className={styles.card__price}>${plan.price} al mes</p>
      <ul className={styles.card__description}>
        {plan.description.map((item, index) => (
          <li key={index} className={styles.card__item}>
            {item}
          </li>
        ))}
      </ul>
      <Button onClick={() => onSelect(plan)} secondary>
        Seleccionar Plan
      </Button>
    </div>
  );
};
