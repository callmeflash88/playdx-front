import type { FC } from "react";
import { Table } from "../../../shared/ui/Table/Table";
import { TableHeader } from "../../../shared/ui/Table/TabeHeader";
import { TableBody } from "../../../shared/ui/Table/TableBody";

import type { Column } from "../../../shared/ui/Table/types/types";

interface Props {
  members: any[];
  columns: Column[];
}

export const MemberTable: FC<Props> = ({ members, columns }) => {
  return (
    <>
      <Table>
        <TableHeader columns={columns} />{" "}
        <TableBody items={members} columns={columns} />
      </Table>
    </>
  );
};
