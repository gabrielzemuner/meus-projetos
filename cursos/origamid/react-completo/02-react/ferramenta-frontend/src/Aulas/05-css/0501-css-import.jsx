import { useState } from "react";
import "./App.css";

export default function App() {
  const titulo = <h1>Título Site</h1>;

  const [random] = useState(() => Math.random());

  const ativo = true;

  function mostrarNome(sobrenome) {
    return `Gabriel ${sobrenome}`;
  }

  const carro = {
    marca: "Ford",
    rodas: "4",
  };

  const estiloP = {
    color: "blue",
    fontSize: "4rem",
  };

  return (
    <>
      {titulo}
      <p>
        {ativo ? "A" : "B"} - {10}
      </p>
      <p>{mostrarNome("Zemuner")}</p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p
        style={{
          color: "red",
          backgroundColor: "black",
          display: "inline",
          padding: "8px",
          borderRadius: "16px",
        }}
      >
        {carro.marca}
      </p>
      <p>{carro.rodas}</p>
      <p className={ativo ? "ativo" : "inativo"}>{(random * 1000) / 50}</p>
    </>
  );
}
