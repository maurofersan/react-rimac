import { apiClient } from "@/services/apiClient";
import type { Plan, PlansResponse } from "../types";

export const plansApi = {
  getPlans: async (): Promise<Plan[]> => {
    try {
      const response = await apiClient.get<PlansResponse>("/plans.json");

      return response.data.list;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching plans");
    }
  },
};
