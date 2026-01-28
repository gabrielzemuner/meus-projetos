// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import { useEffect, useState } from "react";

const Produto = ({ produto }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    if (produto)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  }, [produto]);

  if (dados === null) return null; // aqui eu exibiria com dados && (<div>etc...</div>)
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default function App() {
    // const [produto, setProduto] = useState(window.localStorage.getItem("produto")); // nesse formato o localStorage é lido em toda renderização

  const [produto, setProduto] = useState(() => {
    return window.localStorage.getItem("produto") ?? null;
  }); // nesse formato, a função passada pro useState é executada apenas 1 vez, no primeiro render (montagem)

  // Exibir dado do localStorage se ele existir
  // Essa forma de escrever causa erro no eslint. Alterado o estado produto pra iniciar com o dado do localStorage...
  //   useEffect(() => {
  //     const produtoLocal = window.localStorage.getItem("produto");

  //     if (produtoLocal) setProduto(produtoLocal);
  //   }, []);

  useEffect(() => {
    // Salvar no localStorage
    if (produto) window.localStorage.setItem("produto", produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <div>
        <h1>Preferência: {produto}</h1>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
      </div>
      <Produto produto={produto} />
    </div>
  );
}
