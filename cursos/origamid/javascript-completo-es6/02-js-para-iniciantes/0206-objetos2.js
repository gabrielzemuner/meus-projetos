var carro = {};
var pessoa = {};

console.log(typeof carro);

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84e",
};

var bg = menu.backgroundColor;
console.log(bg);
menu.backgroundColor = "#000"; // modificar valores existentes no objeto
console.log(bg); // interessante isso aqui... não alterou o valor da variável apesar da variável utilizar menu.backgroundColor

menu.color = "blue"; // acrescentar valores no objeto
menu.esconder = function () {
  console.log("esconder");
};

console.log(menu);
console.log(menu.esconder());

// palavra-chave this -> referência ao próprio objeto

var altura = 120;
var menu2 = {
  largura: 800,
  altura: 50,
  metadeAltura() {
    return this.altura / 2;
  },
};

console.log(menu2.metadeAltura()); // 25
// sem o this, seria 60

// herança em objetos -> existem outras propriedades e métodos que os tipos de dados (ex: objeto, string, number etc...) recebem por herança
console.log(menu.hasOwnProperty("color"));
console.log(menu.hasOwnProperty("span"));

console.log("André".length);

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "Gabriel",
  sobrenome: "Zemuner",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
(dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
}),
  console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

console.log(carro.preco);
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Não latir";
    }
  },
};

console.log(cachorro.latir('homem'))
console.log(cachorro.latir('mulher'))