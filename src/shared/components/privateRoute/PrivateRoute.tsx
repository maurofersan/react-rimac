import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@/features/users/hooks/useUser";

export const PrivateRoute = () => {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/" replace />;
};
