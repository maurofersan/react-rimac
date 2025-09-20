import { useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T | null = null
) => {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | null | ((prevValue: T | null) => T | null)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing localStorage key:", key, error);
    }
  };

  return { storedValue, setValue, removeValue };
};
