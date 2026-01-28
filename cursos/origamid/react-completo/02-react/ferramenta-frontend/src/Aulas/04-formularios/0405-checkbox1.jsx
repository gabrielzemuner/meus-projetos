import { useState } from "react";
import { upperFirstLetters } from "../testes/upperFirstLetter";

const Exemplo1 = () => {
  const [termos, setTermos] = useState(false);
  console.log(termos);

  return (
    <form>
      {termos && <p>Aceitou os termos</p>}
      <label>
        <input
          type="checkbox"
          value="termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />{" "}
        Aceito os termos.
      </label>
    </form>
  );
};

// múltiplos checkbox ex: site de notícias pra cadastrar algo sobre diversos temas, futebol, política, saúde etc...
const Exemplo2 = () => {
  const [cores, setCores] = useState(["vermelho", "azul"]);
  // console.log(cores);

  function handleChange({ target }) {
    const { checked, value } = target;

    if (checked) {
      // adicionar valor checked === true
      const novo = [...cores, value];
      console.log("ADICIONANDO", value, "->", novo);
      setCores(novo);
      // setCores([...cores, value])
    } else {
      // remover valor checked === false
      // manter no array todas as cores que forem diferentes do valor clicado
      const novo = cores.filter((cor) => cor !== value);
      console.log("REMOVENDO", value, "->", novo);
      setCores(novo);
      // setCores(cores.filter((cor) => cor !== value))
    }
  }

  const testeUpper = "notícias novas";

  return (
    <form>
      <p>{upperFirstLetters(testeUpper)}</p>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={cores.includes("azul")}
          onChange={handleChange}
        />{" "}
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={cores.includes("vermelho")}
          onChange={handleChange}
        />{" "}
        Vermelho
      </label>
    </form>
  );
};

export default function App() {
  return <Exemplo2 />;
}
