import type { Member, MemberResponse } from "../../entities/member/model/types";
import { api } from "../lib/axios";

export const getUsers = async (): Promise<MemberResponse> => {
  const response = await api.get("/admin/user");
  return response.data;
};
