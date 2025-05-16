import type { ReactNode } from "react";
import { useAuth } from "../shared/lib/useAuth";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, isError } = useAuth();

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return null; // уже редиректнуло

  return <>{children}</>;
};
