import { useQuery } from "@tanstack/react-query";
import { getCampaignsDashboard } from "../../../shared/api/campaignsApi";

export const useCampaigns = () => {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: getCampaignsDashboard,
  });
};
