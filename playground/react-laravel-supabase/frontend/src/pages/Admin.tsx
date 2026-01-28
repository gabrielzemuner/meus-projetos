import { useState } from "react";
import { api } from "../lib/api";

export default function Admin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function createUser(e: React.FormEvent) {
    e.preventDefault();

    try {
      await api("/api/admin/users", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });

      alert("Usuário criado!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <form onSubmit={createUser}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="nome" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" type="password" />
      <button>Criar usuário</button>
    </form>
  );
}
