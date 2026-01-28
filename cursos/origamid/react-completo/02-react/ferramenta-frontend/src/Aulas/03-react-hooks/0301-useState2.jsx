import { useState } from "react";

export default function App() {
  const [items, setItems] = useState("Teste");

  function handleClick() {
    // atualizando o estado passando um valor
    setItems("outro");
  }

  const [ativo, setAtivo] = useState(true);

  function handleClick2() {
    // atualizando o estado utilizando uma função de callback
    // a função de callback sempre vai ter o valor anterior do estado nela como 1o argumento
    setAtivo((anterior) => !anterior);
  }

  return (
    <div>
      {/* <p>{items}</p>
      <button onClick={handleClick}>Clicar</button> */}
      <button onClick={handleClick2}>
        {ativo ? "Está Ativo" : "Está Inativo"}
      </button>
    </div>
  );
}
