import { useNavigate } from "react-router-dom";
import styles from "./PlansPage.module.scss";
import type { Plan } from "@/features/plans/types";
import { PlanCard } from "@/features/plans/components/planCard/PlanCard";
import { usePlanSelection } from "@/features/plans/hooks/usePlanSelection";
import { Stepper, Back } from "@/shared/components";
import { SelectCard } from "@/features/plans/components/selectCard/SelectCard";
import meImg from "@/assets/me.png";
import otherImg from "@/assets/other.png";

export const PlansPage = () => {
  const navigate = useNavigate();
  const { plans, selectedOption, user, selectPlan, handleSelectOption } =
    usePlanSelection();

  const handleSelectPlan = (plan: Plan) => {
    selectPlan(plan);
    navigate("/resumen");
  };

  return (
    <div className={styles.plans}>
      <Stepper currentStep={1} />
      <div className={styles.plans__content}>
        <Back />
        <h2 className={styles.plans__title}>
          {user?.name || ""} ¿Para quién deseas cotizar?
        </h2>
        <p className={styles.plans__subtitle}>
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>

        <div className={styles.plans__selectors}>
          <SelectCard
            title="Para mí"
            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            imageUrl={meImg}
            selected={selectedOption === "me"}
            onSelect={() => handleSelectOption("me")}
          />
          <SelectCard
            title="Para alguien más"
            description="Realiza una cotización para uno de tus familiares o cualquier persona."
            imageUrl={otherImg}
            selected={selectedOption === "other"}
            onSelect={() => handleSelectOption("other")}
          />
        </div>

        {selectedOption && (
          <div className={styles.plans__cards}>
            {plans.map((plan) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                onSelect={handleSelectPlan}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
