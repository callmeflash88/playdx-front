// entities/member/model/types.ts

export interface MemberResponse {
  data: Member[];
  pagination: Pagination;
}

export interface Member {
  id: number;
  full_name: string;
  email: string;
  avatar: string;
  last_login: string; // ISO дата в строке
  location: string;
  points: number;
  discord_id: string;
}

export interface Pagination {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}
