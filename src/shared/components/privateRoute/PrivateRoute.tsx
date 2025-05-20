import { useUser } from "@/features/users/hooks/useUser";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/" replace />;
};
