import { CampaignsTable } from "../../features/campaigns/ui/CampaignTable";
import { MemberSearch } from "../../features/search-members/ui/MemberSearch";
import { useToggleViewModeStore } from "../../features/toggle-view-mode/ model/store";
import { ViewMode } from "../../features/toggle-view-mode/ model/types";
import { ViewModeToggle } from "../../features/toggle-view-mode/ui/ViewModeToggle";

import { DashBoardSummary } from "../../widgets/dashboard-summary/ui/DashboardSummary";
import UserAvatar from "../../widgets/user-avatar/ui/UserAvatar";
import { DashboardMemberTable } from "../../widgets/dashboard-member-table/ui/DashboardMemberTable";

export const DashboardPage = () => {
  const mode = useToggleViewModeStore((state) => state.mode);

  const mockCampaignsData = [
    {
      value: 1232,
      title: "Valid Completions",
    },
    {
      value: 1232,
      title: "Points Awarded",
    },
    {
      value: 9480,
      title: "Points to be Awarded",
    },
    {
      value: 194,
      title: "Participants",
    },
  ];

  const mockMembersData = [
    {
      value: 621,
      title: "Onboarded",
    },
    {
      value: 159,
      title: "Survey Participants",
    },
    {
      value: 23,
      title: "Points to be Awarded",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <ViewModeToggle />
          {mode === ViewMode.Campaigns && <UserAvatar />}
          {mode === ViewMode.Members && <MemberSearch />}
        </div>

        <div className="mt-6">
          {mode === ViewMode.Campaigns && (
            <>
              <DashBoardSummary data={mockCampaignsData} />
            </>
          )}

          {mode === ViewMode.Members && (
            <>
              <DashBoardSummary data={mockMembersData} />
            </>
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
