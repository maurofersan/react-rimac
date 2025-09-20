import type { RootAction } from "@/store/types";
import type { User } from "../../types";
import {
  USER_FETCH_FAILURE,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_RESET,
} from "../actions/userActions";

export interface UserState {
  loading: boolean;
  user: User | null;
  error: string | null;
}

export const initialUserState: UserState = {
  loading: false,
  user: null,
  error: null,
};

export const userReducer = (
  state = initialUserState,
  action: RootAction
): UserState => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case USER_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_RESET:
      console.log("initialUserState::", initialUserState);
      return initialUserState;
    default:
      return state;
  }
};
