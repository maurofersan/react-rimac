import { useMemo, useReducer, type ReactNode } from "react";
import { initialState, rootReducer } from "../rootReducer";
import { fetchUserEffect } from "@/features/users/store/effects/userEffects";
import { fetchPlansEffect } from "@/features/plans/store/effects/fetchPlansEffect";
import { GlobalContext } from "./GlobalContext";
import { resetUser } from "@/features/users/store/actions/userActions";
import {
  resetPlans,
  selectPlan,
} from "@/features/plans/store/actions/plansActions";
import type { Plan } from "@/features/plans/types";

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const fetchUser = async (
    documentType: string,
    documentNumber: string,
    phone: string
  ) => {
    await fetchUserEffect(documentType, documentNumber, phone, dispatch);
  };

  const fetchPlans = async () => {
    await fetchPlansEffect(dispatch);
  };

  const handleSelectPlan = (plan: Plan) => {
    dispatch(selectPlan(plan));
  };

  const reset = () => {
    dispatch(resetUser());
    dispatch(resetPlans());
  };

  const contextValue = useMemo(
    () => ({
      state,
      fetchUser,
      fetchPlans,
      selectPlan: handleSelectPlan,
      reset,
    }),
    [state]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
