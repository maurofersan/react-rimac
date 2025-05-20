import type { Dispatch } from "react";
import { plansApi } from "../../api/plansApi";
import {
  fetchPlansFailure,
  fetchPlansRequest,
  fetchPlansSuccess,
  type PlansAction,
} from "../actions/plansActions";

export const fetchPlansEffect = async (dispatch: Dispatch<PlansAction>) => {
  dispatch(fetchPlansRequest());

  try {
    const plans = await plansApi.getPlans();
    dispatch(fetchPlansSuccess(plans));
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch(fetchPlansFailure(error.message));
    } else {
      dispatch(fetchPlansFailure("Unknown error while fetching the plans"));
    }
  }
};
