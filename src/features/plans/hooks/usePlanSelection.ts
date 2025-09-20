import { useCallback, useEffect, useState } from "react";
import type { Plan } from "../types";
import { useUser } from "@/features/users/hooks/useUser";
import { usePlans } from "./usePlans";
import { getAgeFromBirthdate } from "@/shared/utils/date";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";

type Options = "me" | "other" | null;

export const usePlanSelection = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedOption, setSelectedOption] = useState<Options>(null);
  const { plans: plansData, fetchPlans, selectPlan } = usePlans();
  const { user } = useUser();
  const { setValue: setPersistedSelectedPlan } = useLocalStorage<Plan | null>(
    "selectedPlan",
    null
  );

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
    setPersistedSelectedPlan(plan);
  };

  return {
    plans,
    selectedOption,
    user,
    handleSelectPlan,
    handleSelectOption,
  };
};
