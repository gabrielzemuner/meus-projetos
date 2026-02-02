import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Title from "../../components/Title";

// Interface da API: https://data.origamid.dev/vendas/
// <!-- Essa API possui dados de hoje até 90 dias atrás -->

// 1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
// 2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
// 3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
// 4 - Crie 3 estados reativos em App.tsx: data, inicio, final
// 5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
// 6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
// 7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: string;
};

export default function UseState02() {
  const [inicio, setInicio] = useState("");
  const [final, setFinal] = useState("");
  const [data, setData] = useState<null | Venda[]>(null);

  useEffect(() => {
    if (inicio && final) {
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
        .then((res) => res.json())
        .then((json) => setData(json as Venda[]))
        .catch((error) => console.log(error));
    }
  }, [inicio, final]);

  return (
    <div>
      <Title
        title="useState #2"
        subtitle="Resolvendo exercício com chamada de API"
      />
      <Input
        label="Início"
        type="date"
        setState={setInicio}
        // onChange={(e) => setInicio(e.currentTarget.value)}
      />
      <Input
        label="Final"
        type="date"
        setState={setFinal}
        // onChange={(e) => setFinal(e.currentTarget.value)}
      />
      {data && (
        <div>
          <p>Total Vendas: {data.length}</p>
          <ul className="pl-5">
            {data.map((item) => (
              <li key={item.id}>
                {item.nome}: {item.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
