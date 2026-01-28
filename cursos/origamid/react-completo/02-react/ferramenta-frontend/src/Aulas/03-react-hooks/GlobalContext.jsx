import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [carrinho, setCarrinho] = useState(0);

  return (
    <GlobalContext.Provider value={{ carrinho, setCarrinho, nome: "Teste" }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalStorageExercicio = ({ children }) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados([]);
  }

  return (
    <GlobalContext.Provider value={{dados, limparDados}}>
      {children}
    </GlobalContext.Provider>
  );
};
