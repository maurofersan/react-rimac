import styles from "./Input.module.scss";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  noBorder?: boolean;
  error?: string;
}

export const Input = ({ label, id, noBorder, error, ...props }: InputProps) => {
  return (
    <div>
      <div
        className={`${styles.input__group} ${
          error ? styles["input__group--error"] : ""
        } ${noBorder ? styles["input__group--no-margin"] : ""}`}
      >
        <input
          id={id}
          className={`${styles.input__field} ${
            noBorder ? styles["input__field--no-border"] : ""
          } ${error ? styles["input__field--error"] : ""}`}
          placeholder=" "
          {...props}
        />
        {label && (
          <label htmlFor={id} className={styles.input__label}>
            {label}
          </label>
        )}
      </div>
      {error && <p className={styles.input__error}>{error}</p>}
    </div>
  );
};
