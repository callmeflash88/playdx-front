import type { Campaign } from "../../entities/campaign/model/types";
import type { DashboardResponse } from "../../entities/dashboard/model/type";

import { api } from "../lib/axios";

export const getCampaignsDashboard = async (): Promise<DashboardResponse> => {
  const response = await api.get("/admin/dashboard"); //Add instance
  return response.data;
};
