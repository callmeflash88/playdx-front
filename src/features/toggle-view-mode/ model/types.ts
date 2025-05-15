export const ViewMode = {
  Campaigns: "campaigns",
  Members: "members",
} as const;

export type ViewMode = (typeof ViewMode)[keyof typeof ViewMode];
