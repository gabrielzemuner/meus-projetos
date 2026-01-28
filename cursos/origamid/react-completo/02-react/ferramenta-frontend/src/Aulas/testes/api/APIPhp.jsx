import { useEffect, useState } from "react";

export default function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost/php/api/cards.php4")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar API:" + response.status);
        }
        return response.json();
      })
      .then((data) => setCards(data))
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ padding: "1rem" }}>Carregando...</p>;
  }

  if (error) {
    return <p style={{ padding: "1rem", color: "tomato" }}>Erro: {error}</p>;
  }

  return (
    <div>
      {cards.map((card) => (
        <p>{card.title}</p>
      ))}
    </div>
  );
}
