import cn from "classnames";

import { getKeyValue } from "./constants";
import { TableCell } from "./TableCell";
import type { Column, Row } from "./types/types";
import type { FC } from "react";

interface Props {
  className?: string;
  rowData: Row;
  columns: Column[];
}

export const TableRow: FC<Props> = ({ className, rowData, columns }) => (
  <tr className={cn("text-center", className)}>
    {columns.map((column) => (
      <TableCell key={column.key}>{getKeyValue(rowData, column.key)}</TableCell>
    ))}
  </tr>
);
