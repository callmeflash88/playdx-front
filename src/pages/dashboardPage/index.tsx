import { CampaignsTable } from "../../features/campaigns/ui/CampaignTable";
import { MemberSearch } from "../../features/search-members/ui/MemberSearch";
import { useToggleViewModeStore } from "../../features/toggle-view-mode/ model/store";
import { ViewMode } from "../../features/toggle-view-mode/ model/types";
import { ViewModeToggle } from "../../features/toggle-view-mode/ui/ViewModeToggle";

import { DashBoardSummary } from "../../widgets/dashboard-summary/ui/DashboardSummary";
import UserAvatar from "../../widgets/user-avatar/ui/UserAvatar";
import { DashboardMemberTable } from "../../widgets/dashboard-member-table/ui/DashboardMemberTable";

import { useEffect, useState } from "react";
import type {
  CampaignInfo,
  MemberInfo,
} from "../../entities/dashboard/model/type";
import {
  mapCampaignInfoToSummary,
  mapMemberInfoToSummary,
} from "../../shared/lib/mapCampaignInfoToSummary";
import { useDashboard } from "../../entities/dashboard/model/useDashboard";

export const DashboardPage = () => {
  const mode = useToggleViewModeStore((state) => state.mode);
  const [campaignInfo, setCampaignsInfo] = useState<CampaignInfo>();
  const [memberInfo, setMemberInfo] = useState<MemberInfo>();
  const { data: campaigns } = useDashboard();

  useEffect(() => {
    if (campaigns) {
      setCampaignsInfo(campaigns.campaigns);
      setMemberInfo(campaigns.members);
    }
  }, [campaigns]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <ViewModeToggle />
          {mode === ViewMode.Campaigns && <UserAvatar />}
          {mode === ViewMode.Members && <MemberSearch />}
        </div>

        <div className="mt-6">
          {mode === ViewMode.Campaigns && campaignInfo && (
            <DashBoardSummary data={mapCampaignInfoToSummary(campaignInfo)} />
          )}

          {mode === ViewMode.Members && memberInfo && (
            <DashBoardSummary data={mapMemberInfoToSummary(memberInfo)} />
          )}
        </div>

        {mode === ViewMode.Members && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <DashboardMemberTable />
          </div>
        )}
        {mode === ViewMode.Campaigns && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <CampaignsTable campaigns={[]} />
          </div>
        )}
      </div>
    </div>
  );
};
