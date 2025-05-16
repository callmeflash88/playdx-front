import React from "react";
import { Skeleton } from "../Skeleton";

export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = ({
  rows = 5,
  columns = 4,
}) => {
  return (
    <div className="divide-y divide-gray-200">
      {[...Array(rows)].map((_, rowIdx) => (
        <div
          key={rowIdx}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6 py-4"
        >
          {[...Array(columns)].map((_, colIdx) => (
            <Skeleton key={colIdx} className="h-4 w-full" />
          ))}
        </div>
      ))}
    </div>
  );
};
