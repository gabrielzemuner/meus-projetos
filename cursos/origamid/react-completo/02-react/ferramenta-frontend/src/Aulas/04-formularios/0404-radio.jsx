import { useState } from "react";

export default function App() {
  const [produto, setProduto] = useState("smartphone");
  const [cor, setCor] = useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }

  // a propriedade name com mesmo valor consegue agrupar os itens e considerar qual é o único selecionado... ex: name="produto"
  // se não utilizar o name, é necessário usar o checked={produto === 'nome_item'}
  return (
    <form>
      <h2>Produtos</h2>
      <p>{produto}</p>
      <label>
        <input
          type="radio"
          name="produto"
          checked={produto === "smartphone"}
          value="smartphone"
          onChange={handleChange}
        />{" "}
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          name="produto"
          checked={produto === "notebook"}
          value="notebook"
          onChange={handleChange}
        />{" "}
        Notebook
      </label>
      <h2>Cores</h2>
      <p>{cor}</p>
      <label>
        <input
          type="radio"
          name="cor"
          value="azul"
          onChange={({ target }) => setCor(target.value)}
        />{" "}
        Azul
      </label>
      <label>
        <input
          type="radio"
          name="cor"
          value="vermelho"
          onChange={({ target }) => setCor(target.value)}
        />{" "}
        Vermelho
      </label>
    </form>
  );
}
