import { useState } from "react";
import MegaArc from "./MegaArc";

export default function useMegaArc() {
  const [qtdNumeros, setQtdNumeros] = useState("");
  const [numerosGerados, setNumerosGerados] = useState<number[]>([]);

  function gerarNumeros() {
    if (!qtdNumeros.trim()) return alert("Você precisa digitar um número.");

    const qtd = Number(qtdNumeros);

    if (isNaN(qtd)) return alert("Você precisa digitar um número válido.");

    if (!Number.isInteger(qtd)) return alert("Digite um número inteiro.");

    // validar intervalo depois de ter a certeza que é número (ordem das validações importa)
    if (qtd < 6 || qtd > 15)
      return alert("Qtd. Números precisa ser entre 6 e 15.");

    setNumerosGerados(MegaArc.gerarMega(qtd));
  }

  return {
    qtdNumeros,
    setQtdNumeros,
    numerosGerados,
    gerarNumeros,
  };
}
