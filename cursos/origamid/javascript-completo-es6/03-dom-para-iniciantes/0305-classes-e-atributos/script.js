// classList
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector(".menu");

menu.className; // string com as classes
menu.classList; // lista de classes
menu.classList.add("ativo");
menu.classList.add("ativo", "mobile"); // duas classes, não funciona tentando adicionar + de 1 com espaço (ex: 'ativo mobile')
menu.classList.remove("ativo");
menu.classList.toggle("ativo"); // adiciona/remove a classe
menu.classList.contains("ativo"); // true ou false
menu.classList.replace("ativo", "inativo");

menu.classList.toggle("azul");

if (menu.classList.contains("azul")) {
  console.log("Tem a classe azul");
}

// attributes
// Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector(".animais");

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

// ou dá pra acessar por parâmetros nomeados ao invés do index...
// animais.attributes.class / animais.attributes.id
// console.log(animais.attributes.data-texto) // -> não funciona
console.log(animais.attributes["data-texto"]); // deve ser acessado dessa forma
console.log(animais.attributes["data-texto"].value);

// getAttribute e setAttribute
// Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector("img");

img.getAttribute("src"); // valor do src
img.setAttribute("alt", "Texto Alternativo"); // muda o alt
img.hasAttribute("id"); // true / false
// img.removeAttribute("alt"); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo
// É muito comum métodos de get e set;

// Read Only vs Writable
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais2 = document.querySelector(".animais");

animais2.className; // string com o nome das classes
// animais2.className = "azul"; // substitui completamente a string
animais2.className += " vermelho"; // adiciona vermelho à string

animais2.attributes = 'class="ativo"'; // não funciona, read-only
// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''

// Exercício
// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => item.classList.add("ativo"));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// itensMenu.forEach((item, index) => {
//   if (index > 0) {
//     item.classList.remove("ativo");
//   }
// });

itensMenu.forEach((item) => item.classList.remove("ativo"));
itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]'); // começou com http é um link externo
link.setAttribute("href", "https://www.google.com/");
console.log(link);



function showToast(message, type = "success", duration = 1000) {
  // cria o elemento
  const toast = document.createElement("div");
  toast.classList.add("toast", "show", type);
  toast.textContent = message;

  // adiciona no body
  document.body.appendChild(toast);

  // tira a classe show depois de um tempo (animação de saída)
  setTimeout(() => {
    toast.classList.remove("show");
    // remove do DOM depois da transição
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
