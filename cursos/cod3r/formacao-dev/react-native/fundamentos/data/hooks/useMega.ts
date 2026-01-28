import { useState } from "react";
import Megasena from "../model/Megasena";

export default function useMega() {
  const [qtdNumeros, setQtdNumeros] = useState(6);
  const [jogo, setJogo] = useState<number[]>([]);

  function decrementarQtd() {
    if (qtdNumeros > 6) setQtdNumeros(qtdNumeros - 1);
  }

  function incrementarQtd() {
    if (qtdNumeros < 20) setQtdNumeros(qtdNumeros + 1);
  }

  function gerarJogo() {
    setJogo(Megasena.gerar(qtdNumeros));
  }

  return {
    qtdNumeros,
    jogo,
    incrementarQtd,
    decrementarQtd,
    gerarJogo,
  };
}
