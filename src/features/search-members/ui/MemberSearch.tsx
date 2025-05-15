// features/search-members/ui/MemberSearch.tsx

import React from "react";
import { useSearchMembersStore } from "../model/useSearch";
import { SearchInput } from "../../../shared/ui/SearchInput";

export const MemberSearch: React.FC = () => {
  const query = useSearchMembersStore((state) => state.query);
  const setQuery = useSearchMembersStore((state) => state.setQuery);

  return (
    <SearchInput
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search"
    />
  );
};
