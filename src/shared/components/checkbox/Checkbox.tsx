import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  secondary?: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({
  label,
  checked,
  secondary,
  error,
  onChange,
}: CheckboxProps) => {
  let cssClass = styles.checkbox__input;

  if (secondary) {
    cssClass = styles["checkbox__input--secondary"];
  }

  if (error) {
    cssClass += ` ${styles["checkbox__input--error"]}`;
  }

  return (
    <div className={styles.checkbox__group}>
      <label className={styles.checkbox__label}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={cssClass}
        />
        {label && (
          <span
            className={`${styles.checkbox__text} ${
              error ? styles["checkbox__text--error"] : ""
            }`}
          >
            {label}
          </span>
        )}
      </label>
    </div>
  );
};
