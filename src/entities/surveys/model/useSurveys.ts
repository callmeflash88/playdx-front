import { useQuery } from "@tanstack/react-query";
import { getSurveys } from "../../../shared/api/surveysApi";

export const useSurveys = () => {
  return useQuery({
    queryKey: ["surveys"],
    queryFn: getSurveys,
  });
};
