// Tudo é objeto em javascript
// strings, números, boolean, objetos e mais possuem propriedades e métodos. Por isso, são objetos

var nome = "André";

console.log(nome.length); // 5
console.log(nome.charAt(1)); // 'n'
console.log(nome.replace("ré", "rei")); // 'Andrei'
console.log(nome); // 'André'

var nomeMinusculo = nome.toLowerCase();
console.log(nomeMinusculo);

// Números
var altura = 1.8;
console.log(altura);
console.log(altura.toString()); // '1.8'
console.log(altura.toFixed()); // '2'

// Funções
function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado.toString());

console.log(areaQuadrado.length); // 1 -> total de parâmetros que a função possui

// console.log(addEventListener.length) // não funciona no code runner, apenas no browser

// Elementos do DOM -> objeto
var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // texto 'Clique' -> <a href="btn">Clique</a>
btn.addEventListener("click", function () {
  console.log("Clicou");
});

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

// nomeie 3 propriedades ou métodos de strings
// fixed
// slice
// length

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
// addEventListener
// appendChild
// id
// innerHTML
// outerHTML

// buscando algo que não é nativo do browser, exemplo:
// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// método que criei
var clipboard = {
  copy: window.addEventListener("copy", function (event) {
    var element = event.target;
    var content = element.innerText;
    var message = `Conteúdo copiado: ${content}`;
    window.alert(message);
  }),
};

clipboard.copy();
