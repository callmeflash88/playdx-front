import type { Column } from "../../../shared/ui/Table/types/types";
import { TrophyPoint } from "../ui/TrophuPoints";

export const USER_MEBERS_COLUMN: Column[] = [
  { key: "image", label: "" },
  { key: "user", label: "User" },
  { key: "points", label: "Points" },
  { key: "surveys_completed", label: "Surveys Completed" },
  { key: "last_active", label: "Last Active" },
];

export const getTableItems = (members: any[]) => {
  return members.map((member) => {
    return {
      id: member.id,
      //   image: member.image,
      user: member.username,
      points: {
        type: "component",
        component: TrophyPoint,
        props: {
          points: member.points,
        },
      },
      surveys_completed: member.surveysCompleted,
      last_active: member.lastActive,
    };
  });
};
