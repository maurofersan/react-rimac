export const isValidDocumentNumber = (value: string): boolean => {
  return /^\d{8,12}$/.test(value);
};

export const isValidPhone = (value: string): boolean => {
  return /^\d{9}$/.test(value);
};
