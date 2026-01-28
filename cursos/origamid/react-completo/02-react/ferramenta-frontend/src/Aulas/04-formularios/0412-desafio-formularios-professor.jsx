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

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        border: "2px solid #eee",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: "1rem", fontFamily: "monospace" }}
        >
          <input
            id={id}
            value={option}
            type="radio"
            checked={value === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default function App() {
  const [respostas, setRespostas] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [slide, setSlide] = useState(0);
  const [resultado, setResultado] = useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
}
