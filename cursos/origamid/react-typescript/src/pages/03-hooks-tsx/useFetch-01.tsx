import { useState } from "react";
import Title from "../../components/Title";
import useFetch from "./useFetch";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

export default function UseFetch01() {
  const url = "https://data.origamid.dev/produtos";
  const [id, setId] = useState("p001");
  const { data, loading, error } = useFetch<Produto[]>(url);
  const produto = useFetch<Produto>(`${url}/${id}`);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  return (
    <div>
      <Title title="useFetch #1" subtitle="Teste useFetch" />
      <section className="flex gap-8">
        <div>
          {data &&
            data.map((produto) => (
              <button key={produto.id} onClick={() => setId(produto.id)}>
                {produto.id}
              </button>
            ))}
        </div>
        <div>
          {produto.loading && <div>Carregando...</div>}
          {produto.data && (
            <ul>
              <li>ID: {produto.data.id}</li>
              <li>Nome: {produto.data.nome}</li>
              <li>Descrição: {produto.data.descricao}</li>
              <li>Quantidade: {produto.data.quantidade}</li>
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
