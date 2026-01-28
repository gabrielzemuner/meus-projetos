import { useEffect } from "react";
import useFetch from "./useFetch";

export default function App() {
  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Caregando...</p>;
  if (data)
    return (
      <div>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
}
