import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FormValidationService } from "../services/formValidationService";
import { useUser } from "./useUser";
import type { FormData } from "../types/form";

export const useUserForm = () => {
  const [form, setForm] = useState<FormData>({
    documentType: "dni",
    documentNumber: "",
    phone: "",
    termsAccepted: false,
    commercialAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { fetchUser } = useUser();

  const handleChange = (key: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleDocumentTypeChange = (val: string) => {
    setForm((prev) => ({
      ...prev,
      documentType: val,
      documentNumber: "",
    }));
    setErrors((prev) => ({ ...prev, documentNumber: "" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { isValid, errors } = FormValidationService.validateForm(form);
    if (!isValid) {
      setErrors(errors);
      return;
    }

    setIsLoading(true);
    try {
      await fetchUser(form.documentType, form.documentNumber, form.phone);
      navigate("/planes");
    } catch (error) {
      console.error("Error al obtener datos del usuario", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    handleDocumentTypeChange,
  };
};
