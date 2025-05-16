import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../shared/api/usersApi";

export const useMembers = () => {
  return useQuery({
    queryKey: ["members"],
    queryFn: getUsers,
  });
};
