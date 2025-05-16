import { useMembers } from "../../../entities/member/model/useMembers";
import { MemberTable } from "../../../features/member-table/ui/MemberTable";
import type { Row } from "../../../shared/ui/Table/types/types";
import { getTableItems, USER_MEBERS_COLUMN } from "../constants/constants";

export const UserMemberTable = () => {
  const { data: members } = useMembers();

  console.log("Members:", members);

  if (!members) return null;

  const items = getTableItems(members?.data) as unknown as Row[];

  return <MemberTable members={items} columns={USER_MEBERS_COLUMN} />;
};
