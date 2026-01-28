// Escopo de Função

// Variáveis declaradas dentro de funções não são acessadas fora das mesmas
// Escopo evita o conflito entre nomes

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro();
// console.log(carro) // Erro, carro is not defined

// Variável Global (Erro)
// declarar variável sem usar var, const ou let, cria uma variável que pode ser acessada em qualquer escopo (escopo global)

function mostrarCarro2() {
  carro2 = "Fusca";
  console.log(carro2);
}

mostrarCarro2(); // Fusca
console.log(carro2); // Fusca

// 'use strict' impede isso

// Escopo de Função (Pai)
// variáveis declaradas no escopo pai da função (escopo acima), conseguem ser acessadas pelas funções

var carro3 = "Gol";

function mostrarCarro3() {
  var frase = `Meu carro é um ${carro3}`;
  console.log(frase);
}

mostrarCarro3(); // Meu carro é um Gol
console.log(carro3); // Gol

// Escopo de Bloco
// variáveis criadas com var VAZAM o bloco
// const e let respeitam escopo de bloco

if (true) {
  var carro4 = "BMW";
  let carro5 = "Jeep";
  const carro6 = "Fiesta";
  console.log(carro4);
  console.log(carro5);
  console.log(carro6);
}

console.log(carro4); // BMW -> escopo vazou do bloco de código
// console.log(carro5) // com let, escopo não vaza. Erro is not defined
// console.log(carro6) // com const, escopo não vaza. Erro is not defined

// Var vaza o bloco mesmo com condição false, pois a variável ainda será declarada utilizando hoisting e o valor ficará undefined

// ex:
if (false) {
  var carro7 = "Fusca";
  console.log(carro7);
}

console.log(carro7); // undefined

// For Loop
// utilizar var em for loop, o valor da variável utilizada irá vazar e existir fora do loop
for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}

console.log(i); // 10

for (let x = 0; x < 10; x++) {
  console.log(`Número ${x}`);
}

// console.log(x) // erro is not defined

// Const
// impede modificar valor de variável, evitando bugs

const mes = "Dezembro";
// mes = 'Janeiro' // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

// hoisting -> declaração de variáveis/funções são executadas no início do código
const semana = "Sexta";
// semana = 'Quinta' // é gerado um erro porém os códigos acima são executados
// const semana = 'Quinta' // códigos acima não são executados, pois no momento do hoisting é identificado 2 const com mesmo nome.

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona
data.chuva = true; // Adicionar nova propriedade também funciona
// data = 'Janeiro' // erro

// não conseguimos mudar o nome padrão da const, mas em um objeto ainda assim conseguimos modificar propriedades e métodos do objeto.

// Let
// mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável

// Exercícios

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
// console.log(var, marca, portas);

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}

console.log("somarDois:", somarDois(4));
console.log("dividirDois:", dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

// for (var numero = 0; numero < 10; numero++) { // var numero substituia o valor de var numero = 50 acima...
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
