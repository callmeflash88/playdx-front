import { create } from "zustand";
import { ViewMode } from "./types";

type ToggleViewModeStore = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
};

export const useToggleViewModeStore = create<ToggleViewModeStore>((set) => ({
  mode: ViewMode.Campaigns,
  setMode: (mode) => set({ mode }),
}));
