// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import { useState } from "react";

const AppMinhaResolucao = () => {
  const [loading, setLoading] = useState(false);

  async function fetchProdutos(url) {
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json)
    return json;
  }

  const [produtos, setProdutos] = useState();

  async function handleSearch(url) {
    setLoading(true);
    const data = await fetchProdutos(
      `https://ranekapi.origamid.dev/json/api/produto/${url}`
    );
    // console.log("Array de produtos:", data);
    setProdutos(data);
    setLoading(false);
  }

  console.log(produtos);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
        <button onClick={() => handleSearch("notebook")}>notebook</button>
        <button onClick={() => handleSearch("smartphone")}>smartphone</button>
        <button onClick={() => handleSearch("tablet")}>tablet</button>
      </div>
      <div>{loading && "Carregando..."}</div>
      {produtos && (
        <div>
          <h1>{produtos.nome}</h1>
          <div>R$ {produtos.preco}</div>
          {/* Na resolução do professor ele exibiu apenas 1 imagem selecionando o primeiro item do array... Ou seja, sem a necessidade de fazer um map */}
          {produtos.fotos.map((item) => (
            <img key={item.titulo} src={item.src} />
          ))}
        </div>
      )}
    </div>
  );
};

// Resolução Professor
const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

const App = () => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  async function handleClick(event) {
    setCarregando(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);

    setCarregando(false);
  }

  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

// export default AppMinhaResolucao;
export default App;
