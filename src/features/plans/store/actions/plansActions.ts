import type { Plan } from "../../types";

export const PLANS_FETCH_REQUEST = "@plans/FETCH_REQUEST";
export const PLANS_FETCH_SUCCESS = "@plans/FETCH_SUCCESS";
export const PLANS_FETCH_FAILURE = "@plans/FETCH_FAILURE";
export const PLAN_SELECT = "@plans/SELECT";
export const PLANS_RESET_ALL = "@plans/RESET_ALL";

interface PlansFetchRequestAction {
  type: typeof PLANS_FETCH_REQUEST;
}

interface PlansFetchSuccessAction {
  type: typeof PLANS_FETCH_SUCCESS;
  payload: Plan[];
}

interface PlansFetchFailureAction {
  type: typeof PLANS_FETCH_FAILURE;
  payload: string;
}

interface SelectPlanAction {
  type: typeof PLAN_SELECT;
  payload: Plan;
}

interface ResetPlansAction {
  type: typeof PLANS_RESET_ALL;
}

export const fetchPlansRequest = (): PlansFetchRequestAction => ({
  type: PLANS_FETCH_REQUEST,
});

export const fetchPlansSuccess = (plans: Plan[]): PlansFetchSuccessAction => ({
  type: PLANS_FETCH_SUCCESS,
  payload: plans,
});

export const fetchPlansFailure = (error: string): PlansFetchFailureAction => ({
  type: PLANS_FETCH_FAILURE,
  payload: error,
});

export const selectPlan = (plan: Plan): SelectPlanAction => ({
  type: PLAN_SELECT,
  payload: plan,
});

export const resetPlans = (): ResetPlansAction => ({
  type: PLANS_RESET_ALL,
});

export type PlansAction =
  | PlansFetchRequestAction
  | PlansFetchSuccessAction
  | PlansFetchFailureAction
  | SelectPlanAction
  | ResetPlansAction;
