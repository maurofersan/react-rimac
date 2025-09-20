import { createContext } from "react";
import type { RootState } from "../types";
import type { Plan } from "@/features/plans/types";

interface GlobalContextType {
  state: RootState;
  fetchUser: (
    documentType: string,
    documentNumber: string,
    phone: string
  ) => Promise<void>;
  fetchPlans: () => Promise<void>;
  selectPlan: (plan: Plan) => void;
  resetUser: () => void;
  resetPlans: () => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);
