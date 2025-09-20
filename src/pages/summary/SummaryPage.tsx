import { useUser } from "@/features/users/hooks/useUser";
import { usePlans } from "@/features/plans/hooks/usePlans";
import styles from "./SummaryPage.module.scss";
import { SummaryCard } from "@/features/summary/components/SummaryCard";
import { Back, Stepper } from "@/shared/components";

export const SummaryPage = () => {
  const { user } = useUser();
  const { selectedPlan } = usePlans();

  if (!user || !selectedPlan) {
    return <p className={styles["summary-page__loader"]}>No data found</p>;
  }

  return (
    <div className={styles["summary-page"]}>
      <Stepper currentStep={2} />
      <div className={styles["summary-page__content"]}>
        <Back />
        <h2 className={styles["summary-page__title"]}>Resumen del seguro</h2>

        <SummaryCard
          name={`${user.name} ${user.lastName}`}
          documentType={user.documentType}
          documentNumber={user.documentNumber}
          phone={user.phone}
          planName={selectedPlan.name}
          price={`Costo del Plan: $${selectedPlan.price} al mes`}
        />
      </div>
    </div>
  );
};
