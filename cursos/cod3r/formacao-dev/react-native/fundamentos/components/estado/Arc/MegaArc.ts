export default class MegaArc {
  static gerarMega(qtd: number) {
    const resultado: number[] = [];

    while (resultado.length < qtd) {
      const resultadoAleatorio = Math.floor(Math.random() * 60) + 1;
      if (!resultado.includes(resultadoAleatorio)) {
        resultado.push(resultadoAleatorio);
      }
    }

    return resultado.sort((a, b) => a - b);
  }
}
