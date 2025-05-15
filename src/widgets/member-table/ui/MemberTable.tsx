import type { FC } from "react";
import { Table } from "../../../shared/ui/Table/Table";
import { TableHeader } from "../../../shared/ui/Table/TabeHeader";
import { TableBody } from "../../../shared/ui/Table/TableBody";
import {
  getTableItems,
  MEMBERS_DASHBOARD_COLUMN,
} from "../constants/constants";
import type { Row } from "../../../shared/ui/Table/types/types";

interface Props {
  members: any[];
}

export const MemberTable: FC<Props> = ({ members }) => {
  const mockMembers = [
    {
      id: 1,
      username: "GamerPro123",
      country: "USA",
      age: 37,
      lastActive: "15 Days Ago",
    },
    {
      id: 2,
      username: "StreamQueen",
      country: "USA",
      age: 28,
      lastActive: "15 Days Ago",
    },
    {
      id: 3,
      username: "EsportsKing",
      country: "USA",
      age: 42,
      lastActive: "15 Days Ago",
    },
    {
      id: 4,
      username: "GameMaster99",
      country: "USA",
      age: 31,
      lastActive: "15 Days Ago",
    },
  ];

  const items = getTableItems(mockMembers) as unknown as Row[];

  return (
    <>
      <Table>
        <TableHeader columns={MEMBERS_DASHBOARD_COLUMN} />{" "}
        <TableBody items={items} columns={MEMBERS_DASHBOARD_COLUMN} />
      </Table>
    </>
  );
};
