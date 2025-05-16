// features/search-members/ui/MemberSearch.tsx

import React from "react";

import { SearchInput } from "../../../shared/ui/SearchInput";
import { useSearchStore } from "../model/store";

export const MemberSearch: React.FC = () => {
  const query = useSearchStore((state) => state.query);
  const setQuery = useSearchStore((state) => state.setQuery);

  return (
    <SearchInput
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search"
    />
  );
};
