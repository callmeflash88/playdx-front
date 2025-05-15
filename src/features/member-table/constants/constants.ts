import type { Column } from "../../../shared/ui/Table/types/types";

export const MEMBERS_DASHBOARD_COLUMN: Column[] = [
  { key: "image", label: "" },
  { key: "name", label: "Name" },
  { key: "location", label: "Location" },
  { key: "age", label: "Age" },
  { key: "onboarder", label: "Oboarded At" },
];

export const getTableItems = (members: any[]) => {
  return members.map((member) => {
    return {
      id: member.id,
      image: member.image,
      name: member.username,
      location: member.country,
      age: member.age,
      onboarder: member.lastActive,
    };
  });
};
