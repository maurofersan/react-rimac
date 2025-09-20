import type { Dispatch } from "react";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  type UserAction,
} from "../actions/userActions";
import { usersApi } from "../../api/usersApi";
import { setPersistedJSON } from "@/shared/utils/storage";
import type { User } from "../../types";

export const fetchUserEffect = async (
  documentType: string,
  documentNumber: string,
  phone: string,
  dispatch: Dispatch<UserAction>
) => {
  dispatch(fetchUserRequest());

  try {
    const user = await usersApi.getUser();
    const fullUser = { ...user, documentType, documentNumber, phone };

    dispatch(fetchUserSuccess(fullUser));

    setPersistedJSON<User>("user", fullUser);
  } catch (error: unknown) {
    let errorMessage = "Unknown error";

    if (error instanceof Error) {
      errorMessage = error.message;
    }
    dispatch(fetchUserFailure(errorMessage));
  }
};
