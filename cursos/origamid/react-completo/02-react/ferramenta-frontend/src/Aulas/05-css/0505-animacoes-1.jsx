import { useState } from "react";
import "./Animacao.css";

const Produto = () => {
  return (
    <div className="animeTop">
      <h1>Produto</h1>
      <p>Meu produto</p>
    </div>
  );
};

export default function App() {
  const [ativar, setAtivar] = useState(false);

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </div>
  );
}
