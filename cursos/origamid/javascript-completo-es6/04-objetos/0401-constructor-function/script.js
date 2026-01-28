// Objetos
// Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

const carro = {
  marca: "Marca",
  preco: 0,
};

const honda1 = carro;
honda1.marca = "Honda";
honda1.preco = 4000;

const fiat1 = carro;
fiat1.marca = "Fiat";
fiat1.preco = 3000;

console.log(carro);
console.log(honda1);
console.log(fiat1);
// carro, fiat e honda apontam para o mesmo objeto.

// Constructor Functions
// Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.
// funções construtoras -> padrão sempre começar com letra maiuscula...
function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

const honda2 = new Carro();
honda2.marca = "Honda";
honda2.preco = 4000;
const fiat2 = new Carro();
fiat2.marca = "Fiat";
fiat2.preco = 3000;

console.log(honda2);
console.log(fiat2);

// Usar Pascal Case, ou seja, começar com letra maiúscula.

// new Keyword
/*
    // A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.
    const honda = new Carro();

    // 1 Cria um novo objeto
    honda = {};

    // 2 Define o protótipo
    honda.prototype = Carro.prototype;

    // 3 Aponta a variável this para o objeto
    this = honda;

    // 4 Executa a função, substituindo this pelo objeto
    honda.marca = 'Marca';
    honda.preco = 0;

    // 5 Retorna o novo objeto
    return honda = {
    marca: 'Marca',
    preco: 0,
}
*/

// Parâmetros e Argumentos
// Podemos passar argumentos que serão utilizados no momento da criação do objeto.

function Carro(marcaParam, precoParam) {
  this.marca = marcaParam;
  this.preco = precoParam;
}

const honda = new Carro("Honda", 4000);
const fiat = new Carro("Fiat", 3000);

// professor não passou, mas podemos utilizar classe de uma forma mais "moderna", com orientação a objetos
class CarroClasse {
  constructor(marca = "Marca", preco = 0) {
    this.marca = marca;
    this.preco = preco;
  }

  descrever() {
    return `${this.marca} custa R$ ${this.preco}`;
  }
}

const gol = new CarroClasse("VW", 45000);
console.log(gol.descrever());

// utilizar parâmetros nomeados em JS (não existe por padrão, mas podemos receber um objeto como parâmetro, conforme exemplo abaixo)
class CarroClasseParam {
  constructor({ marca, preco }) {
    this.marca = marca;
    this.preco = preco;
  }
}

const hondaParam = new CarroClasseParam({ marca: "Honda", preco: 4000 });
console.log(hondaParam);

// this Keyword
// O this faz referência ao próprio objeto construído com a Constructor Function.

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log("this:", this);
}

const honda3 = new Carro2("Honda", 2000);
console.log("honda3:", honda3);
// Variáveis dentro da Constructor estão "protegidas".

// Exemplo Real -> manipulação de DOM
// Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.
/*
const Dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add('ativo');
  },
}

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = 'ul';
Dom.ativo(); // adiciona ativo ao ul
*/
// problema -> tentar utilizar um objeto como "molde" para trabalhar com diversos seletores, por ex:
// solução: criar um constructor

// Constructor Function Real
// Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.
// Lembre-se de usar parâmetros

function DomClasse(seletor) {
  const element = document.querySelector(seletor);

  this.ativo = function (classe) {
    element.classList.add(classe);
  };
}

const lista = new DomClasse("ul");
lista.ativo("ativo");

const lastLi = new DomClasse("li:last-child");
lastLi.ativo("ativo");

// Exercícios
// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function PessoaConstructor(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new PessoaConstructor("João", 20);
const maria = new PessoaConstructor("Maria", 25);
const bruno = new PessoaConstructor("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function DomConstructor(seletor) {
  this.elements = document.querySelectorAll(seletor);
  this.addClass = (classe) => {
    this.elements.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = (classe) => {
    this.elements.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const li = new DomConstructor("li");
li.addClass("teste");
li.addClass("abc");
li.removeClass("abc");
