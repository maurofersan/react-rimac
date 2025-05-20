import styles from "./Button.module.scss";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  children: ReactNode;
}

export const Button = ({ children, secondary, ...props }: ButtonProps) => {
  let cssClass = styles.button__primary;

  if (secondary) {
    cssClass = styles.button__secondary;
  }

  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
};
