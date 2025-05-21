import styles from "./Stepper.module.scss";

interface Step {
  number: number;
  label: string;
}

interface StepperProps {
  currentStep: number;
}

const steps: Step[] = [
  { number: 1, label: "Planes y coberturas" },
  { number: 2, label: "Resumen" },
];

export const Stepper = ({ currentStep }: StepperProps) => {
  return (
    <div className={styles.stepper}>
      {steps.map((step, index) => (
        <div key={step.number} className={styles.stepper__step}>
          <div
            className={`${styles.stepper__circle} ${
              currentStep === step.number ? styles.active : ""
            }`}
          >
            {step.number}
          </div>
          <span
            className={`${styles.stepper__label} ${
              currentStep === step.number ? styles.active : ""
            }`}
          >
            {step.label}
          </span>
          {index < steps.length - 1 && (
            <div className={styles.stepper__dots}>
              {[...Array(4)].map((_, i) => (
                <span key={i} className={styles.stepper__dot}></span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
