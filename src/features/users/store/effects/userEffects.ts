import type { Dispatch } from "react";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  type UserAction,
} from "../actions/userActions";
import { usersApi } from "../../api/usersApi";

export const fetchUserEffect = async (
  documentType: string,
  documentNumber: string,
  phone: string,
  dispatch: Dispatch<UserAction>
) => {
  dispatch(fetchUserRequest());

  try {
    const user = await usersApi.getUser();
    dispatch(
      fetchUserSuccess({ ...user, documentType, documentNumber, phone })
    );
  } catch (error: unknown) {
    let errorMessage = "Unknown error";

    if (error instanceof Error) {
      errorMessage = error.message;
    }
    dispatch(fetchUserFailure(errorMessage));
  }
};
