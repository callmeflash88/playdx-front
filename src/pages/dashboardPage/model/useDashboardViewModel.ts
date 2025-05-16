// src/pages/dashboard/model/useDashboardViewModel.ts

import { useDashboard } from "../../../entities/dashboard/model/useDashboard";
import { useToggleViewModeStore } from "../../../features/toggle-view-mode/ model/store";
import { ViewMode } from "../../../features/toggle-view-mode/ model/types";

import {
  mapCampaignInfoToSummary,
  mapMemberInfoToSummary,
} from "../../../shared/lib/mapCampaignInfoToSummary";

export const useDashboardViewModel = () => {
  const mode = useToggleViewModeStore((state) => state.mode);
  const { data: dashboardData, isLoading } = useDashboard();

  const campaignInfo = dashboardData?.campaigns;
  const memberInfo = dashboardData?.members;

  const summaryData =
    mode === ViewMode.Campaigns && campaignInfo
      ? mapCampaignInfoToSummary(campaignInfo)
      : mode === ViewMode.Members && memberInfo
      ? mapMemberInfoToSummary(memberInfo)
      : [];

  return {
    mode,
    summaryData,
    campaignInfo,
    memberInfo,
    isLoading,
  };
};
