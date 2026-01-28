import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import { useAuth } from "../auth/AuthProvider";

type LoginResponse = { token: string; role: "admin" | "user" };

export default function Login() {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await api<LoginResponse>("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      login(data.token, data.role);

      const from = (location.state as any)?.from ?? "/app";
      navigate(from, { replace: true });
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" type="password" />
      <button disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>
    </form>
  );
}
