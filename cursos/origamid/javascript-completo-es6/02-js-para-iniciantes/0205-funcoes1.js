// Parâmetros -> utilizados ao criar a função
// Argumentos -> utilizados ao executar a função

// ex:
function imc(peso, altura) {
  return peso / (altura * altura);
}

// peso e altura são os parâmetros
// 85 e 1.85 são os argumentos
console.log(imc(85, 1.85));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}

console.log(corFavorita());
console.log(corFavorita("azul"));

// Argumentos podem ser funções
addEventListener("click", function () {
  console.log("Clicou");
});
// A função possui dois parâmetros/argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// Funções anônimas -> function() {...} ou () => {...}

// Podemos deixar a função por fora também...
function mostraConsole() {
  console.log("Mostrar console");
}

addEventListener("click", mostraConsole);
