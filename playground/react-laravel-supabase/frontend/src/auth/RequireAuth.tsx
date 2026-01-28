import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function RequireAuth() {
  const { isLogged } = useAuth();
  const location = useLocation();

  if (!isLogged) return <Navigate to="/" replace state={{ from: location.pathname }} />;
  return <Outlet />;
}
