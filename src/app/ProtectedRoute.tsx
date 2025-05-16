import type { ReactNode } from "react";
import { useAuth } from "../shared/lib/useAuth";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoading, isError } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return null;

  return <>{children}</>;
};
