import type { FC } from "react";
import { InfoCard } from "../../../shared/ui/InfoCard";
import { InfoCardSkeleton } from "../../../shared/ui/InforCardSkeleton";

interface Props {
  data?: {
    value: number;
    title: string;
  }[];
  isLoading?: boolean;
}

const getGridColsClass = (cols: number) => {
  switch (cols) {
    case 1:
      return "lg:grid-cols-1";
    case 2:
      return "lg:grid-cols-2";
    case 3:
      return "lg:grid-cols-3";
    case 4:
      return "lg:grid-cols-4";
    default:
      return "lg:grid-cols-1";
  }
};

export const DashBoardSummary: FC<Props> = ({ data = [], isLoading }) => {
  const layout = getGridColsClass(data.length || 4);
  const content = isLoading
    ? Array.from({ length: 4 }).map((_, idx) => <InfoCardSkeleton key={idx} />)
    : data.map((item, idx) => <InfoCard key={idx} {...item} />);

  return (
    <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${layout} mb-8`}>
      {content}
    </div>
  );
};
