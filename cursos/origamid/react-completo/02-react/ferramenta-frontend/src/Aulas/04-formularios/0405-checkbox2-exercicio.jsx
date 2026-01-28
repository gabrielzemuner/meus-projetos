// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

import { useState } from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const Otimizar = () => {
  const [cores, setCores] = useState(["vermelho", "azul"]);

  function handleChange({ target }) {
    const { checked, value } = target;

    if (checked) {
      // adicionar valor checked === true
      setCores([...cores, value]);
    } else {
      // remover valor checked === false
      // manter no array todas as cores que forem diferentes do valor clicado
      setCores(cores.filter((cor) => cor !== value));
    }
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: "capitalize" }}>
          <input
            type="checkbox"
            value={cor}
            checked={cores.includes(cor)}
            onChange={handleChange}
          />{" "}
          {cor}
        </label>
      ))}
    </form>
  );
};

export default function App() {
  return <Otimizar />;
}
