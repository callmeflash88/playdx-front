import type { FC } from "react";
import type { IconType } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";

type SidebarItemProps = {
  to: string;
  label: string;
  //   icon: React.ReactNode;
  icon: IconType;
};

export const SidebarItem: FC<SidebarItemProps> = ({
  to,
  label,
  icon: Icon,
}) => {
  const location = useLocation();

  return (
    <li>
      <NavLink
        to={to}
        className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded-xl ${
          location.pathname === to ? "bg-gray-800" : ""
        }`}
      >
        <Icon className="w-5 h-5 mr-2" />
        <span>{label}</span>
      </NavLink>
    </li>
  );
};
