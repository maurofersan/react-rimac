import { useState, useRef, useEffect } from "react";
import styles from "./Select.module.scss";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  noBorder: boolean;
}

export const Select = ({
  label,
  options,
  value,
  noBorder,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.select} ref={selectRef}>
      <button
        type="button"
        className={`${styles.select__trigger} ${
          noBorder ? styles["select__trigger--no-border"] : ""
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className={`${styles.select__value} ${
            !selectedLabel ? styles["select__value--empty"] : ""
          }`}
        >
          {selectedLabel || label}
        </span>
        <span className={styles.select__arrow}>&#9662;</span>
      </button>

      {isOpen && (
        <ul className={styles.select__list}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={styles.select__option}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
