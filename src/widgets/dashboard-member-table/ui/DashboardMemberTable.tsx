import { type FC, useMemo } from "react";
import {
  getTableItems,
  MEMBERS_DASHBOARD_COLUMN,
} from "../constants/constants";
import type { Row } from "../../../shared/ui/Table/types/types";
import { MemberTable } from "../../../features/member-table/ui/MemberTable";
import { useMembers } from "../../../entities/member/model/useMembers";
import { useSearchStore } from "../../../features/search-members/model/store";
import { TableSkeleton } from "../../../shared/ui/TableSkeleton";

export const DashboardMemberTable: FC = () => {
  const { data, isLoading } = useMembers();
  const query = useSearchStore((state) => state.query.toLowerCase());

  const items = useMemo(() => {
    const allItems = getTableItems(data?.data ?? []) as Row[];

    if (!query) return allItems;

    return allItems.filter((row) => {
      const values = Object.values(row).join(" ").toLowerCase();
      return values.includes(query);
    });
  }, [data, query]);

  if (isLoading) {
    return <TableSkeleton rows={6} columns={4} />;
  }

  return <MemberTable members={items} columns={MEMBERS_DASHBOARD_COLUMN} />;
};
