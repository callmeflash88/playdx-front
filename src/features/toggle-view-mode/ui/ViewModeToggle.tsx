import clsx from "clsx";
import { ViewMode } from "../ model/types";
import { useToggleViewModeStore } from "../ model/store";

export const ViewModeToggle = () => {
  const { mode, setMode } = useToggleViewModeStore();

  const modes = [ViewMode.Campaigns, ViewMode.Members];

  return (
    <div className="flex space-x-4">
      {modes.map((item) => (
        <button
          key={item}
          onClick={() => setMode(item)}
          className={clsx("text-lg font-semibold transition-colors", {
            "text-blue-600": mode === item,
            "text-gray-500 hover:text-gray-800": mode !== item,
          })}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
};
