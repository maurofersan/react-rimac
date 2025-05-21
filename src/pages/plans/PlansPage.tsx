import { useCallback, useEffect, useState } from "react";
import styles from "./PlansPage.module.scss";
import type { Plan } from "@/features/plans/types";
import { PlanCard } from "@/features/plans/components/planCard/PlanCard";
import { Stepper, Header, Back } from "@/shared/components";
import { SelectCard } from "@/features/plans/components/selectCard/SelectCard";
import meImg from "@/assets/me.png";
import otherImg from "@/assets/other.png";
import { usePlans } from "@/features/plans/hooks/usePlans";
import { useUser } from "@/features/users/hooks/useUser";
import { getAgeFromBirthdate } from "@/shared/utils/date";
import { useNavigate } from "react-router-dom";

type Options = "me" | "other" | null;

export const PlansPage = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedOption, setSelectedOption] = useState<Options>(null);
  const { plans: plansData, fetchPlans, selectPlan } = usePlans();
  const { user } = useUser();
  const navigate = useNavigate();

  const getFilteredPlans = useCallback(
    (plans: Plan[], userAge: number): Plan[] => {
      return plans.filter((plan) => userAge >= plan.age);
    },
    []
  );

  const calculateOtherPrice = useCallback((): Plan[] => {
    const age = user?.birthDay ? getAgeFromBirthdate(user.birthDay) : 0;
    const filteredPlans = getFilteredPlans(plansData, age);

    return filteredPlans.map((plan: Plan) => {
      const discount = (plan.price * 5) / 100;

      return {
        ...plan,
        price: plan.price - discount,
      };
    });
  }, [plansData, user, getFilteredPlans]);

  useEffect(() => {
    if (!user) {
      return;
    }

    if (selectedOption === "other") {
      const otherPlans = calculateOtherPrice();
      setPlans(otherPlans);
    } else if (selectedOption === "me") {
      const age = user.birthDay ? getAgeFromBirthdate(user.birthDay) : 0;
      const filteredPlans = getFilteredPlans(plansData, age);
      setPlans(filteredPlans);
    }
  }, [plansData, selectedOption, user, calculateOtherPrice, getFilteredPlans]);

  const handleSelectOption = async (option: Options) => {
    setSelectedOption(option);

    if (option) {
      await fetchPlans();
    }
  };

  const handleSelectPlan = (plan: Plan) => {
    selectPlan(plan);
    navigate("/resumen");
  };

  return (
    <div className={styles.plans}>
      <Header />
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
