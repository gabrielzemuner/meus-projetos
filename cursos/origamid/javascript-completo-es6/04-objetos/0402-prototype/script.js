// Prototype
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa("André", 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined

// funcao.prototype
// É possível adicionar novas propriedades e métodos ao objeto prototype.

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};
Pessoa.prototype.nadar = function () {
  return this.nome + " nadou";
};
console.log(Pessoa.prototype); // retorna o objeto

// Acesso ao Protótipo
// O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.

const andre2 = new Pessoa("André", 28);

console.log(andre2.nome);
console.log(andre2.idade);
console.log(andre2.andar());
console.log(andre2.nadar());

// proto
// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
console.log(andre2.andar());
console.log(andre2.__proto__.andar());

// Herança de Protótipo
// O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.

console.log(Object.prototype);
console.log(andre.toString());
console.log(andre.isPrototypeOf());
console.log(andre.valueOf());

// Construtores Nativos
// Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.

const pais = "Brasil";
const cidade = new String("Rio");

pais.charAt(0); // B
cidade.charAt(0); // R

// podemos identificar os métodos e propriedades dos construtores a partir do prototype...
// ex:
String.prototype;
Number.prototype;
Object.prototype;

// É possível acessar a função do protótipo
// É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.

const lista = document.querySelectorAll("li");

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
// Existe o método Array.from()

// Método do Objeto vs Protótipo
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.

Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

// Apenas os Métodos do Protótipo são Herdados
[1, 2, 3].slice(); // existe
// [1, 2, 3].from(); // não existe

// Entenda o Que está Sendo Retornado
// Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .

const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};

Carro; // Object
Carro.marca; // String
Carro.preco; // Number
Carro.acelerar; // Function
Carro.acelerar(); // Boolean
Carro.marca.charAt; // Function
Carro.marca.charAt(0); // String

// Exercícios
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// exemplo onde arrow function não tem this
// Pessoas.prototype.nomeCompleto = () => { // isso não funciona por causa do motivo acima
Pessoas.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const gabriel = new Pessoas("Gabriel", "Zemuner", 32);
console.log(gabriel);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; // HTMLLIElement -> li.constructor.name
li.click; // Function -> li.click.constructor.name
li.innerText; // String -> li.innerText.constructor.name
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined -> não existe constructor de null e undefined, ou seja, não existe métodos e parâmetros para null e undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
