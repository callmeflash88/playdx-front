import type { Survey } from "../../../entities/surveys/model/types";
import type { Column } from "../../../shared/ui/Table/types/types";

export const CAMPAIGNS_DASHBOARD_COLUMN: Column[] = [
  { key: "title", label: "Title" },
  { key: "appId", label: "Is App ID" },
  { key: "completions", label: "Completions" },
  { key: "pointsToBeAwarded", label: "Points To Be Awarded" },
  { key: "pointsAwarded", label: "Points Awarded" },
];

export const getTableItems = (campaigns: Survey[]) => {
  return campaigns.map((campaign) => {
    return {
      id: campaign.id,
      title: campaign.title,
      appId: campaign.intellisurvey_id,
      completions: campaign.completions,
      pointsToBeAwarded: campaign.points_to_be_awarded,
      pointsAwarded: campaign.points_awarded,
    };
  });
};
