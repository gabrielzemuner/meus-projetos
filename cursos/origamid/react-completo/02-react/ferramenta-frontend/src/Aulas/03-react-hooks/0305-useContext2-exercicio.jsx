// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import { useContext } from "react";
import { GlobalContext, GlobalStorageExercicio } from "./GlobalContext";

const Dados = () => {
  // const {dados, limparDados} = useContext(GlobalContext) // destructuring
  const global = useContext(GlobalContext);
  // console.log(global);

  return (
    <div>
      <button onClick={global.limparDados}>Limpar Dados</button>
      {global.dados.map((item) => (
        <p key={item.id}>{item.nome}</p>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <GlobalStorageExercicio>
      <Dados />
    </GlobalStorageExercicio>
  );
}
