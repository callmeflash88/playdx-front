import React from "react";
import clsx from "clsx";

type SkeletonProps = {
  className?: string;
};

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={clsx("animate-pulse bg-gray-200 rounded", className)} />
  );
};
