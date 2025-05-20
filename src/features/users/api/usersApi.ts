import { apiClient } from "@/services/apiClient";
import type { User } from "../types";

export const usersApi = {
  getUser: async (): Promise<User> => {
    try {
      const response = await apiClient.get<User>("/user.json");

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching user");
    }
  },
};
