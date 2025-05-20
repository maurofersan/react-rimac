import type { PlansAction } from "@/features/plans/store/actions/plansActions";
import type { PlansState } from "@/features/plans/store/reducers/plansReducer";
import type { UserAction } from "@/features/users/store/actions/userActions";
import type { UserState } from "@/features/users/store/reducers/userReducer";

export interface RootState {
  user: UserState;
  plans: PlansState;
}

export type RootAction = UserAction | PlansAction;
