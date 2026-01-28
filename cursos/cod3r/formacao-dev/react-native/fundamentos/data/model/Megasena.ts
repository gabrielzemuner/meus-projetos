export default class Megasena {
  static gerar(qtdNumeros: number) {
    const numeros: number[] = [];
    for (let i = 0; i < qtdNumeros; i++) {
      numeros.push(Megasena.sortearNumeroDiferente(numeros, 1, 60));
    }
    return numeros.sort((a, b) => a - b);
  }

  private static gerarNumeroAleatorio(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private static sortearNumeroDiferente(
    lista: number[],
    min: number,
    max: number
  ): number {
    const numero = Megasena.gerarNumeroAleatorio(min, max);
    if (lista.includes(numero)) {
      return Megasena.sortearNumeroDiferente(lista, min, max);
    }
    return numero;
  }
}
