import type {
  CreateSurveyRequest,
  SurveyResponse,
} from "../../entities/surveys/model/types";
import { api } from "../lib/axios";

export const getSurveys = async (): Promise<SurveyResponse> => {
  const response = await api.get("/admin/survey");
  return response.data;
};

export const createSurvey = async (
  data: CreateSurveyRequest
): Promise<void> => {
  await api.post("/admin/survey/create", data);
};
