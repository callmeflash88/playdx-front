import { sidebarItems } from "./config";
import { SidebarItem } from "./SidebarItem";
import { SideBarLogo } from "./SideBarLogo";

export const SideBar = () => {
  return (
    <aside className="w-[320px] bg-[#1E1F22] text-white">
      <SideBarLogo />

      <nav className="mt-4 px-4">
        <ul>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.to} {...item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
