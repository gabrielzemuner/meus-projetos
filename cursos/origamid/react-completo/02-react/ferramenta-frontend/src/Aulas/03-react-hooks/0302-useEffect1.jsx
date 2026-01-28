import { useEffect, useState } from "react";

const Exemplo1 = () => {
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Executou");
  }, []);

  useEffect(() => {
    document.title = "Total " + contar;
  }, [contar]);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

const Exemplo2 = () => {
  const [contar, setContar] = useState(0);
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

const Exemplo3 = () => {
  const [ativo, setAtivo] = useState(false);

  return (
    <div>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

// Não entendi porra nenhuma desse exemplo. O que deu pra entender é que colocando o removeEventListener ele "limpa" a quantidade de disparos ao verificar no Event Listeners do browser...
const Produto = () => {
  useEffect(() => {
    function handleScroll() {
      console.log("disparou ao rodar scroll do mouse");
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ height: "200vh" }}>
      <p>Meu produto</p>
    </div>
  );
};

const Testes = () => {
  const [contar, setContar] = useState(0);

  console.log("1 - Rodei e rodo toda hora que qualquer estado atualizar");

  useEffect(() => {
    console.log("2 - Rodei só quando o componente montou");
  }, []);

  useEffect(() => {
    console.log(
      "3 - Rodei quando o componente montou ('contar' inicializado em 0) e quando o estado 'contar' atualizar"
    );
  }, [contar]);

  useEffect(() => {
    console.log("4 - Roda toda hora porque não tem array de dependência, porém no final do render e não no início, como no exemplo 1");
  });

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>Valor: {contar}</button>
    </div>
  );
};

export default function App() {
  return <Testes />;
}
