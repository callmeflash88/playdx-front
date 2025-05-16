import type { Member } from "../../../entities/member/model/types";
import type { Column } from "../../../shared/ui/Table/types/types";
import { TrophyPoint } from "../ui/TrophuPoints";

export const USER_MEBERS_COLUMN: Column[] = [
  { key: "image", label: "" },
  { key: "user", label: "UserName" },
  { key: "points", label: "Points" },
  { key: "surveys_completed", label: "Surveys Completed" },
  { key: "last_active", label: "Last Active" },
];

export const getTableItems = (members: Member[]) => {
  return members.map((member) => {
    return {
      id: member.id,
      //   image: member.image,
      user: member.full_name,
      points: {
        type: "component",
        component: TrophyPoint,
        props: {
          points: member.points,
        },
      },
      // surveys_completed: member.surveysCompleted,
      last_active: member.last_login,
    };
  });
};
