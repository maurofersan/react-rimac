export const isValidDocumentNumber = (value: string, type: string): boolean => {
  if (type === "dni") {
    return /^\d{8}$/.test(value);
  }

  if (type === "ce") {
    return /^[A-Za-z0-9]{9,12}$/.test(value);
  }

  return false;
};

export const isValidPhone = (value: string): boolean => {
  return /^\d{9}$/.test(value);
};
