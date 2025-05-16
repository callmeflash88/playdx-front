import type { Member } from "../../../entities/member/model/types";
import type { Column } from "../../../shared/ui/Table/types/types";

export const MEMBERS_DASHBOARD_COLUMN: Column[] = [
  { key: "image", label: "" },
  { key: "name", label: "Username" },
  { key: "location", label: "Location" },
  // { key: "age", label: "Age" },
  { key: "onboarder", label: "Oboarded At" },
];

export const getTableItems = (members: Member[]) => {
  return members.map((member) => {
    return {
      id: member.id,
      // image: member.avatar,
      image: {
        type: "image",
        src: `https://cdn.discordapp.com/avatars/${member.discord_id}/${member.avatar}.png`,
        alt: member.full_name,
        id: member.id,
        path: member.avatar,
      },
      name: member.full_name,
      location: member.location,
      // age: member.age,
      onboarder: member.last_login,
    };
  });
};
