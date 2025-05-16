import { UserMemberTable } from "../../widgets/user-member-table/ui/userMembersTable";

export const UsersPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
      <div className="mt-6 bg-white shadow overflow-hidden rounded-lg">
        <UserMemberTable />
      </div>
    </div>
  );
};
