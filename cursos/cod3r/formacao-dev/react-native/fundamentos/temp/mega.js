function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(gerarNumeroAleatorio(1, 60));

function sortearNumeroDiferente(lista, min, max) {
  const numero = gerarNumeroAleatorio(min, max);
  if (lista.includes(numero)) {
    return sortearNumeroDiferente(lista, min, max);
  }
  return numero;
}

const numeros = [1, 2, 4, 5, 6, 7, 8, 9, 10];

// console.log(sortearNumeroDiferente(numeros, 1, 10));

function gerarMega(qtdNumeros) {
  const numeros = [];
  for (let i = 0; i < qtdNumeros; i++) {
    numeros.push(sortearNumeroDiferente(numeros, 1, 60));
  }
  return numeros.sort((a, b) => a - b);
}

console.log(gerarMega(6));
