import {
  initialPlansState,
  plansReducer,
} from "@/features/plans/store/reducers/plansReducer";
import {
  initialUserState,
  userReducer,
} from "@/features/users/store/reducers/userReducer";
import { combineReducers } from "./combineReducers";
import type { RootAction, RootState } from "./types";

export const initialState: RootState = {
  user: initialUserState,
  plans: initialPlansState,
};

export const rootReducer = combineReducers<RootState, RootAction>({
  user: userReducer,
  plans: plansReducer,
});
