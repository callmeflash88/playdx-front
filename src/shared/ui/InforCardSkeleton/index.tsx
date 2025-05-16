import React from "react";
import { Skeleton } from "../Skeleton";

export const InfoCardSkeleton: React.FC = () => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <Skeleton className="h-8 w-24 mb-2" />
      <Skeleton className="h-5 w-32" />
    </div>
  </div>
);
