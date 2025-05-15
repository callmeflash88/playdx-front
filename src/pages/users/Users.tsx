import { UserMemberTable } from "../../widgets/user-member-table/ui/userMembersTable";

export const UsersPage = () => {
  return (
    <div>
      <h1>Users</h1>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <UserMemberTable />
      </div>
    </div>
  );
};
