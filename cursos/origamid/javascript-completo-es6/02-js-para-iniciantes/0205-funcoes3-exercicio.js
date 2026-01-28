// Crie uma função para verificar se um valor é Truthy
function valorEhTruthy(valor) {
  // if (!!valor) {
  //   console.log(`${valor}: é Truthy`);
  // } else {
  //   console.log(`${valor}: é Falsy`);
  // }
  // return !!valor
  console.log(!!valor);
}

// Validação com mesmos exemplos do arquivo '0204-booleans-e-condicionais1.js'
valorEhTruthy(true);
valorEhTruthy(1);
valorEhTruthy(" ");
valorEhTruthy("andre");
valorEhTruthy(-5);
valorEhTruthy({});

valorEhTruthy(false);
valorEhTruthy(0);
valorEhTruthy(NaN);
valorEhTruthy(null);
valorEhTruthy(undefined);
valorEhTruthy("");

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Gabriel", "Zemuner"));

// Crie uma função que verifica se um número é par
function ehPar(numero) {
  var resto = numero % 2;
  if (resto === 0) {
    // return `${numero}: é par`;
    return true;
  } else {
    // return `${numero}: é ímpar`;
    return false;
  }
}

console.log(ehPar(0));
console.log(ehPar(2));
console.log(ehPar(3));
console.log(ehPar(7));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(valor) {
  return typeof valor;
}

console.log(tipoDado("texto")); // retorna string
console.log(tipoDado(10)); // retorna number
console.log(tipoDado(null)); // retorna object
console.log(tipoDado(undefined)); // retorna undefined

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener("click", function () {
  console.log(nomeCompleto("Gabriel", "Zemuner"));
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
