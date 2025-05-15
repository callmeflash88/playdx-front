import type { FC } from "react";

interface Props {
  points: number;
}
export const TrophyPoint: FC<Props> = ({ points }) => {
  return (
    <div className=" w-full flex items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-yellow-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
      <span>{points}</span>
    </div>
  );
};
