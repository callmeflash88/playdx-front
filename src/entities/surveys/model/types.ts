import type { Pagination } from "../../member/model/types";

export interface Survey {
  completions: number;
  created_at: string; // ISO
  id: number;
  intellisurvey_id: string;
  last_rewards: null | any; //  null,   ,
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

export interface CreateSurveyRequest {
  title: string;
  intellisurvey_id: string;
  reward_value: string;
}
