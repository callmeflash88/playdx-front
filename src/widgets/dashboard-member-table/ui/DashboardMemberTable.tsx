import { type FC } from "react";
import {
  getTableItems,
  MEMBERS_DASHBOARD_COLUMN,
} from "../constants/constants";
import type { Row } from "../../../shared/ui/Table/types/types";
import { MemberTable } from "../../../features/member-table/ui/MemberTable";
import { useMembers } from "../../../entities/member/model/useMembers";

export const DashboardMemberTable: FC = () => {
  const { data } = useMembers();

  const items = getTableItems(data?.data ?? []) as Row[];

  return <MemberTable members={items} columns={MEMBERS_DASHBOARD_COLUMN} />;
};
