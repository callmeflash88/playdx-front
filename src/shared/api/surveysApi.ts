import type { SurveyResponse } from "../../entities/surveys/model/types";
import { api } from "../lib/axios";

export const getSurveys = async (): Promise<SurveyResponse> => {
  const response = await api.get("/admin/survey");
  return response.data;
};
