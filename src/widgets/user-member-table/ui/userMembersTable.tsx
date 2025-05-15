import { MemberTable } from "../../../features/member-table/ui/MemberTable";
import type { Row } from "../../../shared/ui/Table/types/types";
import { getTableItems, USER_MEBERS_COLUMN } from "../constants/constants";

export const UserMemberTable = () => {
  const mockUsers = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      username: "AlphaWolf",
      points: 1200,
      surveysCompleted: 15,
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      username: "SurveyQueen",
      points: 980,
      surveysCompleted: 12,
      lastActive: "1 day ago",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      username: "DataHunter",
      points: 1420,
      surveysCompleted: 18,
      lastActive: "30 mins ago",
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      username: "StatMaster",
      points: 870,
      surveysCompleted: 9,
      lastActive: "3 days ago",
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      username: "GraphGuy",
      points: 1110,
      surveysCompleted: 14,
      lastActive: "5 hours ago",
    },
    {
      id: 6,
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      username: "PollPrincess",
      points: 1340,
      surveysCompleted: 17,
      lastActive: "2 days ago",
    },
    {
      id: 7,
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      username: "TrendWizard",
      points: 1500,
      surveysCompleted: 20,
      lastActive: "10 mins ago",
    },
    {
      id: 8,
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      username: "InsightGal",
      points: 890,
      surveysCompleted: 10,
      lastActive: "4 hours ago",
    },
    {
      id: 9,
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      username: "FormFiller",
      points: 760,
      surveysCompleted: 7,
      lastActive: "12 hours ago",
    },
    {
      id: 10,
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      username: "QuizBee",
      points: 1020,
      surveysCompleted: 13,
      lastActive: "6 hours ago",
    },
  ];

  const items = getTableItems(mockUsers) as unknown as Row[];

  return <MemberTable members={items} columns={USER_MEBERS_COLUMN} />;
};
