export interface CampaignInfo {
  valid_completions: number;
  points_awarded: number;
  points_to_be_awarded: number;
  participants: number;
}

export interface MemberInfo {
  onboarded: number;
  survey_participants: number;
  banned: number;
}

export interface DashboardResponse {
  campaigns: CampaignInfo;
  members: MemberInfo;
}
