import {
  PLANS_RESET_ALL,
  PLAN_SELECT,
  PLANS_FETCH_FAILURE,
  PLANS_FETCH_REQUEST,
  PLANS_FETCH_SUCCESS,
} from "../actions/plansActions";
import type { Plan } from "../../types";
import type { RootAction } from "@/store/types";

export interface PlansState {
  loading: boolean;
  error: string | null;
  plans: Plan[];
  selectedPlan: Plan | null;
}

export const initialPlansState: PlansState = {
  loading: false,
  error: null,
  plans: [],
  selectedPlan: null,
};

export const plansReducer = (
  state: PlansState = initialPlansState,
  action: RootAction
): PlansState => {
  switch (action.type) {
    case PLANS_FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case PLANS_FETCH_SUCCESS:
      return { ...state, loading: false, plans: action.payload };
    case PLANS_FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case PLAN_SELECT:
      return { ...state, selectedPlan: action.payload };
    case PLANS_RESET_ALL:
      return initialPlansState;
    default:
      return state;
  }
};
