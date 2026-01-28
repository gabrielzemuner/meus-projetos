// Desafio

import { useState } from "react";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

export default function App() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [resposta, setResposta] = useState("");
  const [respostasCorretas, setRespostasCorretas] = useState([]);
  const terminou = indiceAtual === perguntas.length;
  const perguntaAtual = perguntas[indiceAtual];

  function handleChange({ target }) {
    setResposta(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleClick() {
    // console.log(resposta);

    // mudar "páginas"
    setIndiceAtual((indiceAnterior) => indiceAnterior + 1);

    // salvar valores selecionados apenas se for true com resposta correta
    if (resposta === perguntaAtual.resposta) {
      // console.log("Resposta correta");
      setRespostasCorretas([...respostasCorretas, resposta]);
    }
    // console.log(respostasCorretas);
  }

  return (
    <>
      {terminou ? (
        <p>
          Você acertou: {respostasCorretas.length} de {perguntas.length}
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <b>{perguntaAtual.pergunta}</b>
            </legend>
            {perguntaAtual.options.map((pergunta) => (
              <label key={pergunta}>
                <input
                  type="radio"
                  name="pergunta"
                  checked={resposta === pergunta}
                  value={pergunta}
                  onChange={handleChange}
                />
                <span style={{ fontSize: "1rem" }}>{pergunta}</span>
              </label>
            ))}
          </fieldset>
          <button style={{ marginTop: "10px" }} onClick={handleClick}>
            Próxima
          </button>
        </form>
      )}
    </>
  );
}
