import type { FC } from "react";
import {
  CAMPAIGNS_DASHBOARD_COLUMN,
  getTableItems,
} from "../constants/constants";
import { Table } from "../../../shared/ui/Table/Table";
import { TableHeader } from "../../../shared/ui/Table/TabeHeader";
import { TableBody } from "../../../shared/ui/Table/TableBody";
import { NewCampaignButton } from "./NewCampaignButton";
import { useSurveys } from "../../../entities/surveys/model/useSurveys";
import type { Row } from "../../../shared/ui/Table/types/types";
import { TableSkeleton } from "../../../shared/ui/TableSkeleton";

export const CampaignsTable: FC = () => {
  const { data, isLoading } = useSurveys();

  const tableItems = getTableItems(data?.data || []) as unknown as Row[];

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col">
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-lg font-medium text-gray-900">Campaigns</h2>
        <NewCampaignButton />
      </div>
      {isLoading ? (
        <TableSkeleton rows={6} columns={4} />
      ) : (
        <Table>
          <TableHeader columns={CAMPAIGNS_DASHBOARD_COLUMN} />
          <TableBody items={tableItems} columns={CAMPAIGNS_DASHBOARD_COLUMN} />
        </Table>
      )}
    </div>
  );
};
