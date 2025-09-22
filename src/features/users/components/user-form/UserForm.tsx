import { Input, Select, Button, Checkbox } from "@/shared/components";
import styles from "./UserForm.module.scss";
import { useUserForm } from "../../hooks/useUserForm";

const documentOptions = [
  { value: "dni", label: "DNI" },
  { value: "ce", label: "CE" },
];

const UserForm = () => {
  const {
    form,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    handleDocumentTypeChange,
  } = useUserForm();

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
            onChange={handleDocumentTypeChange}
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

      <Button type="submit" size="sm" disabled={isLoading}>
        {isLoading ? "Procesando..." : "Cotiza aquí"}
      </Button>
    </form>
  );
};

export default UserForm;
