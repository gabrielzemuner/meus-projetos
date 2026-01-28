// ID
// getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

// Retorna null caso não exista
const naoExiste = document.getElementById("teste");

console.log(animaisSection);

// Classe e Tag
// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
const contato2 = document.getElementsByClassName("grid-section contato");

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);

// Seletor Geral Único
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li");

// Seletor Geral Lista
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection2 = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

// Retorna o segundo elemento
console.log(gridSection[1]);

// Diferente do getElementsByClassName, a lista aqui é estática

// HTMLCollection vs NodeList
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

// Array-Like
// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

const gridSection3 = document.querySelectorAll(".grid-section");

gridSection3.forEach(function (gridItem, index, array) {
  gridItem.classList.add("azul");
  console.log(index); // index do item na array
  console.log(array); // a array completa
});

// É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)

const arrayGrid = Array.from(gridSectionHTML); // HTMLCollection não possui forEach por ex, mas agora foi transformado em um array e possui todos os métodos de array, como o forEach por exemplo

// gridSectionHTML.forEach(function() {...}) // HTMLCollection, não funciona pois não possui esse método forEach

// agora no exemplo abaixo possui
arrayGrid.forEach(function (item) {
  console.log("arrayGrid:", item);
});

// Exercício
// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
imagens.forEach(function (item) {
  // contém a palavra imagem
  const palavraImagem = item.src.includes("imagem");
  if (palavraImagem) {
    console.log(item);
  }
});

// professor fez de uma maneira muito mais simples a resolução acima
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelectorAll(".animais-descricao h2")[0];
console.log(h2Animais);

// resolução professor
const h2AnimaisProfessor = document.querySelector(".animais-descricao h2");
console.log(h2AnimaisProfessor);

// Selecione o último p do site
const qtdParagrafos = document.querySelectorAll("p").length;
const ultimoParagrafo = document.querySelectorAll("p")[qtdParagrafos - 1];
console.log(ultimoParagrafo);

// resolução professor - mesmo resultado
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);

console.log(paragrafos.length - 1);
console.log(--paragrafos.length); // mesmo resultado
