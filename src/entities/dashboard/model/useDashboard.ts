import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../../../shared/api/dashboardApi";

export const useDashboard = () => {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: getDashboard,
  });
};
