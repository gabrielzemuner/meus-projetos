import { useCallback, useMemo, useState } from "react";

function operacaoLenta() {
  let c;

  for (let i = 0; i < 100000000; i++) {
    c = i + 1 / 10;
  }
  return c;
}

// useMemo
const Exemplo1 = () => {
  const [contar, setContar] = useState(0);

  // buscar valores do localStorage não usam muita memória, então esse não é um exemplo do mundo real...
  //   const valor = useMemo(() => {
  //     const localItem = window.localStorage.getItem("produto");
  //     console.log("Aconteceu o memo");
  //     return localItem;
  //   }, []);

  // verificar tempo de execução (performance) -> obs: operação com 100ms é considerada muito lenta no javascript.
  const tempo1 = performance.now();
  //   const valor = operacaoLenta(); // no meu exemplo estava dando entre 27ms e 30ms
  const valor = useMemo(() => operacaoLenta(), []); // com useMemo o valor é salvo na primeira execução, então primeira execução demora em torno dos 27 a 30ms e depois 0.20ms, 0.30ms ou seja, 0ms...
  // o useMemo salva o valor na memória na primeira execução e não executa novamente a operação...
  console.log(valor);
  console.log(performance.now() - tempo1);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

// useCallback

// Set é como se fosse um array mas que só recebe itens únicos
const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log("Func1");
  };

  const func2 = useCallback(() => {
    console.log("Func2");
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log("Set1", set1);
  console.log("Set2", set2);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const Exemplo2 = () => {
  const [contar, setContar] = useState(0);

  // toda vez que o componente é renderizado a função abaixo é criada, porém a operação é muito rápida..
  const handleClick = () => {
    setContar(contar + 1);
  };

  // com o useCallback, a função será criada apenas 1 vez, porém não há ganho real de performance
  const handleClick2 = useCallback(() => {
    setContar((v) => v + 1);
  }, []);

  return (
    <div>
      <Produto />
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default function App() {
  return <Exemplo2 />;
}
