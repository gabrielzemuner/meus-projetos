import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { useAuth } from "../auth/AuthProvider";
import { Link } from "react-router-dom";

type Post = { id: number; title: string; content: string | null };

export default function Posts() {
  const { role, logout } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function load() {
    const data = await api<Post[]>("/api/posts");
    setPosts(data);
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();
    await api<Post>("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
    setTitle("");
    setContent("");
    load();
  }

  async function remove(id: number) {
    await api<null>(`/api/posts/${id}`, { method: "DELETE" });
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <button onClick={logout}>Sair</button>
        {role === "admin" && <Link to="/admin">Admin</Link>}
      </div>

      <form onSubmit={create}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Conteúdo" />
        <button>Criar</button>
      </form>

      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <button onClick={() => remove(p.id)} style={{ marginLeft: 8 }}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
