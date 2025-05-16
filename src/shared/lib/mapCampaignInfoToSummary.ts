import type {
  CampaignInfo,
  MemberInfo,
} from "../../entities/dashboard/model/type";

// shared/lib/mapCampaignInfoToSummary.ts
export const mapCampaignInfoToSummary = (
  info: CampaignInfo
): { value: number; title: string }[] => {
  return [
    { value: info.valid_completions, title: "Valid Completions" },
    { value: info.points_awarded, title: "Points Awarded" },
    { value: info.points_to_be_awarded, title: "Points to be Awarded" },
    { value: info.participants, title: "Participants" },
  ];
};

export const mapMemberInfoToSummary = (
  info: MemberInfo
): { value: number; title: string }[] => {
  return [
    { value: info.onboarded, title: "Onboarded" },
    { value: info.survey_participants, title: "Survey Participants" },
    { value: info.banned, title: "Banned" },
  ];
};
