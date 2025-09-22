import type { FormData } from "../types/form";
import { isValidDocumentNumber, isValidPhone } from "../utils/validations";

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export class FormValidationService {
  private static readonly VALIDATION_MESSAGES = {
    DOCUMENT_NUMBER_REQUIRED: "Este campo es obligatorio",
    DOCUMENT_NUMBER_INVALID_DNI: "El DNI debe tener 8 dígitos",
    DOCUMENT_NUMBER_INVALID_CE:
      "El CE debe tener entre 9 y 12 caracteres alfanuméricos",
    PHONE_REQUIRED: "Este campo es obligatorio",
    PHONE_INVALID: "Número inválido",
    TERMS_REQUIRED: "Debes aceptar los términos",
  } as const;

  public static validateForm(formData: FormData): ValidationResult {
    const errors: ValidationError[] = [];

    const documentNumberError = this.validateDocumentNumber(
      formData.documentNumber,
      formData.documentType
    );
    if (documentNumberError) {
      errors.push({ field: "documentNumber", message: documentNumberError });
    }

    const phoneError = this.validatePhone(formData.phone);
    if (phoneError) {
      errors.push({ field: "phone", message: phoneError });
    }

    const termsError = this.validateTermsAcceptance(formData.termsAccepted);
    if (termsError) {
      errors.push({ field: "termsAccepted", message: termsError });
    }

    return {
      isValid: errors.length === 0,
      errors: this.errorsToRecord(errors),
    };
  }

  private static validateDocumentNumber(
    documentNumber: string,
    documentType: string
  ): string | null {
    if (!documentNumber.trim()) {
      return this.VALIDATION_MESSAGES.DOCUMENT_NUMBER_REQUIRED;
    }

    if (!isValidDocumentNumber(documentNumber, documentType)) {
      return documentType === "dni"
        ? this.VALIDATION_MESSAGES.DOCUMENT_NUMBER_INVALID_DNI
        : this.VALIDATION_MESSAGES.DOCUMENT_NUMBER_INVALID_CE;
    }

    return null;
  }

  private static validatePhone(phone: string): string | null {
    if (!phone.trim()) {
      return this.VALIDATION_MESSAGES.PHONE_REQUIRED;
    }

    if (!isValidPhone(phone)) {
      return this.VALIDATION_MESSAGES.PHONE_INVALID;
    }

    return null;
  }

  private static validateTermsAcceptance(
    termsAccepted: boolean
  ): string | null {
    if (!termsAccepted) {
      return this.VALIDATION_MESSAGES.TERMS_REQUIRED;
    }

    return null;
  }

  private static errorsToRecord(
    errors: ValidationError[]
  ): Record<string, string> {
    return errors.reduce((acc, error) => {
      acc[error.field] = error.message;
      return acc;
    }, {} as Record<string, string>);
  }
}
