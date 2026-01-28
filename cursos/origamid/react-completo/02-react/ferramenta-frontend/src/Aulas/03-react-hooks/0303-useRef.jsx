import { useEffect, useRef, useState } from "react";

// Pode ser usado pra guardar valores, sem precisar usar querySelector ou similar
const Exemplo1 = () => {
  const botao = useRef();

  //   console.log(botao); // não consegue ser acessado ao renderizar componente. Só estão disponíveis após renderizar, ou seja, dentro de um useEffect
  useEffect(() => {
    console.log(botao.current);
  }, []);

  return <button ref={botao}>Teste</button>;
};

// É comum utilizarmos em formulários, quando precisamos de uma referência do elemento para colocarmos o mesmo em foco.
const Exemplo2 = () => {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState("");
  const inputElement = useRef();

  function handleClick() {
    setComentarios((comentarios) => [...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

// useRef salva um valor que não é modificado quando o componente é renderizado novamente
const Exemplo3 = () => {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho");

    // Limpar notificação

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
      console.log("timeout disparado"); // problema: dispara a cada clique ao adicionar carrinho, dispara várias vezes... Com o useRef, é disparado apenas 1 vez ao final de vários cliques no botão
    }, 2000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

// Exemplo chatgpt guardar valor anterior do estado e exibir. Não deve ser mais usado useRef nesse caso e sim um estado (useState), conforme exemplo 5
const Exemplo4 = () => {
  const [valor, setValor] = useState(0);
  const valorAnterior = useRef();

  useEffect(() => {
    valorAnterior.current = valor;
  }, [valor]);

  return (
    <div>
      <p>Valor atual: {valor}</p>
      <p>Valor anterior: {valorAnterior.current}</p>{" "}
      {/* exibição na UI deve ser usado useState, por isso o erro ao tentar exibir valores com o useRef */}
      <button onClick={() => setValor(valor + 1)}>Adicionar</button>
    </div>
  );
};

const Exemplo5 = () => {
  const [valor, setValor] = useState(0);
  const [valorAnterior, setValorAnterior] = useState(0);

  function handleClick() {
    // 1º guarda o valor atual como "anterior"
    setValorAnterior(valor);
    // 2º depois incrementa o valor
    setValor(valor + 1);
  }

  return (
    <div>
      <p>Valor atual: {valor}</p>
      <p>Valor anterior: {valorAnterior}</p>
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
};

export default function App() {
  return <Exemplo5 />;
}
