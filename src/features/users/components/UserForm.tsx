import { useState, type FormEvent } from "react";
import { Input, Select, Button, Checkbox } from "@/shared/components";
import styles from "./UserForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { isValidDocumentNumber, isValidPhone } from "../utils/validations";

const documentOptions = [
  { value: "dni", label: "DNI" },
  { value: "ce", label: "CE" },
];

const UserForm = () => {
  const [form, setForm] = useState({
    documentType: "dni",
    documentNumber: "",
    phone: "",
    termsAccepted: false,
    commercialAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { fetchUser } = useUser();

  const handleChange = (key: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.documentNumber) {
      newErrors.documentNumber = "Este campo es obligatorio";
    } else if (!isValidDocumentNumber(form.documentNumber)) {
      newErrors.documentNumber = "Debe tener entre 8 y 12 dígitos";
    }

    if (!form.phone) {
      newErrors.phone = "Este campo es obligatorio";
    } else if (!isValidPhone(form.phone)) {
      newErrors.phone = "Número inválido";
    }

    if (!form.termsAccepted) {
      newErrors.termsAccepted = "Debes aceptar los términos";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await fetchUser(form.documentType, form.documentNumber, form.phone);
      navigate("/planes");
    } catch (error) {
      console.error("Error al obtener datos del usuario", error);
    }
  };

  return (
    <form className={styles.user__form} onSubmit={handleSubmit}>
      <div>
        <div
          className={`${styles.user__group} ${
            errors.documentNumber ? styles["user__group--error"] : ""
          }`}
        >
          <Select
            label="Tipo de documento"
            options={documentOptions}
            value={form.documentType}
            onChange={(val) => handleChange("documentType", val)}
            noBorder
          />
          <Input
            label="Número de documento"
            value={form.documentNumber}
            onChange={(e) => handleChange("documentNumber", e.target.value)}
            noBorder
          />
        </div>
        {errors.documentNumber && (
          <p className={styles.user__error}>{errors.documentNumber}</p>
        )}
      </div>
      <Input
        label="Celular"
        value={form.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        error={errors.phone}
      />

      <div className={styles.user__terms}>
        <Checkbox
          label="Acepto la Política de Privacidad"
          checked={form.termsAccepted}
          onChange={(checked) => handleChange("termsAccepted", checked)}
          error={errors.termsAccepted}
        />
        <Checkbox
          label="Acepto la Política Comunicaciones Comerciales"
          checked={form.commercialAccepted}
          onChange={(checked) => handleChange("commercialAccepted", checked)}
        />
        <a
          href="#"
          className={styles["user__terms-link"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Aplican Términos y Condiciones.
        </a>
      </div>

      <Button type="submit">Cotiza aquí</Button>
    </form>
  );
};

export default UserForm;
