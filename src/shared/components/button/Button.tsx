import styles from "./Button.module.scss";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export const Button = ({
  children,
  secondary,
  size = "md",
  ...props
}: ButtonProps) => {
  let cssClass = styles.button__primary;

  if (secondary) {
    cssClass = styles.button__secondary;
  }

  const sizeClass = styles[`button__${size}`];

  return (
    <button className={`${cssClass} ${sizeClass}`} {...props}>
      {children}
    </button>
  );
};
