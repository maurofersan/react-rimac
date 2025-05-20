import { useContext } from "react";
import { GlobalContext } from "@/store/context/GlobalContext";
import type { Plan } from "../types";

export interface PlansContextProps {
  loading: boolean;
  error: string | null;
  plans: Plan[];
  selectedPlan: Plan | null;
  fetchPlans: () => Promise<void>;
  selectPlan: (plan: Plan) => void;
}

export const usePlans = (): PlansContextProps => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("usePlans must be used inside a GlobalProvider");
  }

  const { state, fetchPlans, selectPlan } = context;

  return {
    ...state.plans,
    fetchPlans,
    selectPlan,
  };
};
