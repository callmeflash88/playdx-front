// features/search-members/model/store.ts

import { create } from "zustand";
import type { Member } from "./types";

interface SearchMembersStore {
  query: string;
  setQuery: (query: string) => void;
  members: Member[];
  setMembers: (members: Member[]) => void;
  filteredMembers: Member[];
}

export const useSearchMembersStore = create<SearchMembersStore>((set, get) => ({
  query: "",
  setQuery: (query) => {
    set({ query });
    const { members } = get();
    const filtered = members.filter((member) =>
      member.name.toLowerCase().includes(query.toLowerCase())
    );
    set({ filteredMembers: filtered });
  },
  members: [],
  setMembers: (members) => {
    set({ members, filteredMembers: members });
  },
  filteredMembers: [],
}));
