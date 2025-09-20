import { useContext } from "react";
import { GlobalContext } from "@/store/context/GlobalContext";
import type { User } from "../types";

export interface UserContextProps {
  loading: boolean;
  user: User | null;
  error: string | null;
  fetchUser: (
    documentType: string,
    documentNumber: string,
    phone: string
  ) => Promise<void>;
  resetUser: () => void;
}

export const useUser = (): UserContextProps => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useUser must be used inside a GlobalProvider");
  }

  const { state, fetchUser, resetUser } = context;

  return {
    ...state.user,
    fetchUser,
    resetUser,
  };
};
