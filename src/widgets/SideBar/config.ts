import {
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  GiftIcon,
  HomeIcon,
  PencilSquareIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";

export const sidebarItems = [
  { label: "Dashboard", to: "/", icon: HomeIcon },
  { label: "Surveys", to: "/surveys", icon: ClipboardDocumentListIcon },
  { label: "Users", to: "/users", icon: UsersIcon },
  { label: "Rewards", to: "/rewards", icon: GiftIcon },
  { label: "Account", to: "/account", icon: PencilSquareIcon },
  { label: "Settings", to: "/settings", icon: Cog6ToothIcon },
];
