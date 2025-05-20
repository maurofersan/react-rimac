import styles from "./Stepper.module.scss";

interface StepperProps {
  step: number;
  totalSteps: number;
}

export const Stepper = ({ step, totalSteps }: StepperProps) => {
  return (
    <div className={styles.stepper}>
      <span className={styles.stepper__label}>
        PASO {step} DE {totalSteps}
      </span>
      <div className={styles.stepper__bar}>
        <div
          className={styles.stepper__progress}
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
};
