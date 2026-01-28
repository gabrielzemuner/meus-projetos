import useFetch from "@/_testes/hooks/useFetch";

type User = {
  id: number;
  name: string;
};

export default function Comp() {
  const { data, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );

  return (
    <ul>
      {loading && <li>Carregando...</li>}
      {error && <li>Erro ao carregar</li>}
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
