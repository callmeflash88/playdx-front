// shared/ui/InfoCard.tsx
import React from "react";

type InfoCardProps = {
  title: string;
  value: string | number;
};

export const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="text-3xl font-semibold text-gray-900">{value}</div>
        <p className="mt-1 text-lg text-gray-500">{title}</p>
      </div>
    </div>
  );
};
