import { createContext, useContext, useMemo, useState } from "react";

type Role = "admin" | "user";

type AuthCtx = {
  token: string | null;
  role: Role | null;
  isLogged: boolean;
  login: (token: string, role: Role) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );
  const [role, setRole] = useState<Role | null>(
    () => (localStorage.getItem("role") as Role) || null
  );

  const isLogged = !!token;

  function login(newToken: string, newRole: Role) {
    localStorage.setItem("token", newToken);
    localStorage.setItem("role", newRole);
    setToken(newToken);
    setRole(newRole);
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
    setRole(null);
  }

  const value = useMemo(
    () => ({ token, role, isLogged, login, logout }),
    [token, role, isLogged]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth precisa estar dentro de <AuthProvider />");
  return ctx;
}
