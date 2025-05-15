// entities/campaign/model/types.ts

export interface Campaign {
  id: string;
  name: string;
  status: "active" | "paused" | "completed";
  startDate: string;
  endDate: string;
  budget: number;
}
