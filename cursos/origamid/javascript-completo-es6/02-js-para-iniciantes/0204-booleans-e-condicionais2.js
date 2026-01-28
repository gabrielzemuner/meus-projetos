// Operadores lógicos -> && (and)
// Obs: nos operadores lógicos, o que é retornado é sempre o valor e não boolean (a não ser que o valor comparado é boolean)
// ex: comparou true && true -> retorna true
// comparou true && false -> retorna false
// comparou "Gato" && "Cão" -> retorna "Cão"
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log("Gato" && "Cão"); // 'Cão'
console.log(5 - 5 && 5 + 5); // 0 -> (5 - 5) = 0 (false) e (5 + 5) = 10, porém como 0 é false, esse valor que é retornado... É como se fosse 0 && 10 -> retorna 0 (false). aqui é feito uma expressão aritmética
console.log(0 && 10); // 0 -> conforme exemplo acima
console.log("Gato" && false); // false
console.log(5 >= 5 && 3 < 6); // true -> aqui é feito uma operação de comparação (5 >= 5 && 3 < 6)

// Se não encontrar nenhum valor falso, ele retorna o último verdadeiro (ex: linha 9) (mesmo sentido da linha comentada abaixo)
// Se ambos os valores forem true, ele irá retornar o último valor
// Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

// Retorna o último valor verdadeiro ou o primeiro falso (o código para de avaliar algo se já encontrar valor falso, enquanto que pra valor verdadeiro ele continua e para no último que encontrar)

// prettier-ignore
if ((5 - 5) && (5 + 5)) { // retorno 'Falso' pois está comparando 0 && 10 -> 0 é false
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

// prettier-ignore
if ((5 - 10) && (5 + 5)) { // retorna 'Verdadeiro' pois está comparando -5 (truthy) com 10 (truthy) -> retorno true. No fim das contas, a comparação é como se fosse if (10) {...} porque 10 é o último valor true da comparação -> explicação na linha 16
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

// prettier-ignore
console.log((5 - 10) && (5 + 5))

// Operadores lógicos -> || (or)
// Retorna o primeiro valor true que encontrar
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log("Gato" || "Cão"); // 'Gato'
console.log(5 - 5 || 5 + 5); // 10
console.log("Gato" || false); // 'Gato'
console.log(5 >= 5 || 3 < 6);

// Switch

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para o rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
}

// Exercícios
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 32;
var idadePrimo = 34;

if (minhaIdade > idadePrimo) {
  console.log("É maior");
} else if ((minhaIdade = idadePrimo)) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; // retorna 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// dica: verificar truthy ou falsy com !!
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)
console.log(nome, idade, possuiDoutorado, empregoFuturo, dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes')
} else {
  console.log('Brasil tem menos habitantes')
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
