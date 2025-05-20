import type { User } from "../../types";

export const USER_FETCH_REQUEST = "@user/FETCH_REQUEST";
export const USER_FETCH_SUCCESS = "@user/FETCH_SUCCESS";
export const USER_FETCH_FAILURE = "@user/FETCH_FAILURE";
export const USER_RESET = "@user/RESET";

interface FetchUserRequestAction {
  type: typeof USER_FETCH_REQUEST;
}

interface FetchUserSuccessAction {
  type: typeof USER_FETCH_SUCCESS;
  payload: User;
}

interface FetchUserFailureAction {
  type: typeof USER_FETCH_FAILURE;
  payload: string;
}

interface ResetUserAction {
  type: typeof USER_RESET;
}

export const fetchUserRequest = (): FetchUserRequestAction => ({
  type: USER_FETCH_REQUEST,
});

export const fetchUserSuccess = (user: User): FetchUserSuccessAction => ({
  type: USER_FETCH_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error: string): FetchUserFailureAction => ({
  type: USER_FETCH_FAILURE,
  payload: error,
});

export const resetUser = (): ResetUserAction => ({
  type: USER_RESET,
});

export type UserAction =
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserFailureAction
  | ResetUserAction;
