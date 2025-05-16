import type { Pagination } from "../../member/model/types";

export interface Survey {
  completions: number;
  created_at: string; // ISO дата в формате строки
  id: number;
  intellisurvey_id: string;
  last_rewards: null | any; // пока null, можно уточнить тип, если знаешь
  points_awarded: number;
  points_to_be_awarded: number;
  reward_value: number;
  status: number;
  title: string;
}

export interface SurveyResponse {
  data: Survey[];
  pagination: Pagination;
}
