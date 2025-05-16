// src/pages/dashboard/ui/DashboardPage.tsx

import { CampaignsTable } from "../../features/campaigns/ui/CampaignTable";
import { MemberSearch } from "../../features/search-members/ui/MemberSearch";
import { ViewMode } from "../../features/toggle-view-mode/ model/types";
import { ViewModeToggle } from "../../features/toggle-view-mode/ui/ViewModeToggle";
import { DashboardMemberTable } from "../../widgets/dashboard-member-table/ui/DashboardMemberTable";
import { DashBoardSummary } from "../../widgets/dashboard-summary/ui/DashboardSummary";
import UserAvatar from "../../widgets/user-avatar/ui/UserAvatar";
import { useDashboardViewModel } from "./model/useDashboardViewModel";

export const DashboardPage = () => {
  const { mode, summaryData } = useDashboardViewModel();

  const renderHeaderControls = () => {
    switch (mode) {
      case ViewMode.Campaigns:
        return <UserAvatar />;
      case ViewMode.Members:
        return <MemberSearch />;
      default:
        return null;
    }
  };

  const renderTable = () => {
    switch (mode) {
      case ViewMode.Campaigns:
        return <CampaignsTable />;
      case ViewMode.Members:
        return <DashboardMemberTable />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <ViewModeToggle />
          {renderHeaderControls()}
        </div>

        <div className="mt-6">
          <DashBoardSummary data={summaryData} />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {renderTable()}
        </div>
      </div>
    </div>
  );
};
