import { createContext, useContext } from "react";
import { GlobalContext, GlobalStorage } from "./GlobalContext";

const UserContext = createContext();

const Provider = () => {
  return (
    <UserContext.Provider value={{ nome: "Gabriel" }}>
      <Produto />
    </UserContext.Provider>
  );
};

const Produto = () => {
  const user = useContext(UserContext);
  return (
    <div>
      Produto de{" "}
      <span style={{ fontWeight: "bold", backgroundColor: "cyan" }}>
        {user.nome}
      </span>
    </div>
  );
};

// Exemplo de uso real do context. Podemos passar qualquer coisa no value do context, até estados e funções atualizadores do 'useState'
// App.jsx
const Exemplo2 = () => {
  return (
    <GlobalStorage>
      <Produto2 />
    </GlobalStorage>
  );
};

const Produto2 = () => {
  const global = useContext(GlobalContext);

  function handleClick() {
    global.setCarrinho((carrinho) => carrinho + 1);
  }

  return (
    <p>
      Total: {global.carrinho}: <button onClick={handleClick}>Adicionar</button>
      <div>Usuário Logado: {global.nome}</div>
    </p>
  );
};

export default function App() {
  return <Exemplo2 />;
}
