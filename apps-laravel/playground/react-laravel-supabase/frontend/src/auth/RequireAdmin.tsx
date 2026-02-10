import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function RequireAdmin() {
  const { role } = useAuth();
  if (role !== "admin") return <Navigate to="/app" replace />;
  return <Outlet />;
}
