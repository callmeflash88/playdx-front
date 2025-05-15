import type { FC } from "react";
import {
  CAMPAIGNS_DASHBOARD_COLUMN,
  getTableItems,
} from "../constants/constants";
import { Table } from "../../../shared/ui/Table/Table";
import { TableHeader } from "../../../shared/ui/Table/TabeHeader";
import { TableBody } from "../../../shared/ui/Table/TableBody";
import { NewCampaignButton } from "./NewCampaignButton";

interface Props {
  campaigns: any[];
}

export const CampaignsTable: FC<Props> = ({ campaigns }) => {
  if (campaigns) {
    console.log("Campaigns:", campaigns);
  }
  const mockCampaigns = [
    {
      title: "Gaming Experience Survey",
      appId: "gaming_exp_2024",
      completions: 120,
      pointsToBeAwarded: 2920,
      pointsAwarded: 120,
    },
    {
      title: "Mobile Gaming Habits",
      appId: "mobile_gaming_24",
      completions: 120,
      pointsToBeAwarded: 2920,
      pointsAwarded: 120,
    },
    {
      title: "Esports Viewership",
      appId: "esports_view_24",
      completions: 120,
      pointsToBeAwarded: 2920,
      pointsAwarded: 120,
    },
  ];

  const tableItems = getTableItems(mockCampaigns);

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col">
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-lg font-medium text-gray-900">Campaigns</h2>
        <NewCampaignButton />
      </div>
      <Table>
        <TableHeader columns={CAMPAIGNS_DASHBOARD_COLUMN} />
        <TableBody items={tableItems} columns={CAMPAIGNS_DASHBOARD_COLUMN} />
      </Table>
    </div>
  );
};
