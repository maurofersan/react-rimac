import { useCallback, useMemo, useReducer, type ReactNode } from "react";
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
import { getPersistedJSON } from "@/shared/utils/storage";
import type { User } from "@/features/users/types";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";

interface GlobalProviderProps {
  children: ReactNode;
}

const init = (baseState: typeof initialState) => {
  const persistedUser = getPersistedJSON<User>("user");
  const persistedSelectedPlan = getPersistedJSON<Plan>("selectedPlan");

  return {
    ...baseState,
    user: {
      ...baseState.user,
      user: persistedUser,
    },
    plans: {
      ...baseState.plans,
      selectedPlan: persistedSelectedPlan,
    },
  };
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState, init);
  const { removeValue: removePersistedUser } = useLocalStorage<Plan>("user");
  const { removeValue: removePersistedSelectedPlan } =
    useLocalStorage<Plan>("selectedPlan");

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

  const handleResetUser = useCallback(() => {
    dispatch(resetUser());
    removePersistedUser();
  }, [removePersistedUser]);

  const handleResetPlans = useCallback(() => {
    dispatch(resetPlans());
    removePersistedSelectedPlan();
  }, [removePersistedSelectedPlan]);

  const contextValue = useMemo(
    () => ({
      state,
      fetchUser,
      fetchPlans,
      selectPlan: handleSelectPlan,
      resetUser: handleResetUser,
      resetPlans: handleResetPlans,
    }),
    [state, handleResetUser, handleResetPlans]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
