// Truthy e Falsy
var nome = "André";
var nome2 = ""; // string vazia é false no javascript, portanto cai no else

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

if (nome2) {
  console.log(nome2);
} else {
  console.log("Nome não existe");
}

// Falsy
/*
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

Todo o resto em js é truthy
*/

var truthy = 5;
var falsy = 0;

if (truthy) {
  console.log(truthy, "verdadeiro");
} else {
  console.log(truthy, "falso");
}

if (falsy) {
  console.log(falsy, "verdadeiro");
} else {
  console.log(falsy, "falso");
}

// Truthy
/*
if(true)
if(1)
if(' ')
if('andre)
if(-5)
if({})
*/

// Operador lógico de negação
/*
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true

if(!!' ') // true
if(!!'') // false

Dica -> utilizar o !! pra verificar se uma expressão é Truthy ou Falsy
*/

// Operadores de comparação -> retornam um valor booleano
console.log(10 > 5) // true
console.log(5 > 10) // false
console.log(20 < 10) // false
console.log(10 <= 10) // true
console.log(10 >= 11) // false

console.log(10 == '10') // true
console.log(10 == 10) // true
console.log(10 === '10') // false
console.log(10 === 10) // true
console.log(10 != 15) // true
console.log(10 != '10') // false
console.log(10 !== '10') // true

console.log('Gato' == 'gato') // linguagem sensitive case 