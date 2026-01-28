import { areaQuadrado, perimetroQuadrado } from "./quadrado.js"; // necessário desestruturação de objetos, pois existem 2 exports no arquivo importado
import numeroAleatorio from "./numeroAleatorio.js"; // aqui não é necessário fazer desestruturação pois existe export default (exportação de apenas 1 item único) no arquivo importado
import quadrado from "./quadrado2.js";

/* Modules - obs: só funciona se estiver com servidor rodando, seja local ou online */
// Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização e compartilhamento de código comum.
console.log(areaQuadrado(5));
console.log(perimetroQuadrado(5));
console.log(numeroAleatorio());

console.log(quadrado.areaQuadrado(2));
console.log(quadrado.perimetroQuadrado(2));

/* Fetch */
// Envia requisições assíncronas para o servidor. Serve para acessarmos/escrevermos dados em apis externas.

// fetch("https://ranekapi.origamid.dev/json/api/produto")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });

// async await - sintaxe nova mais simples de ler do que o fetch
async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  // console.log(json)
  return json;
}

const produtos = fetchProdutos(
  "https://ranekapi.origamid.dev/json/api/produto"
);

/* Métodos de Array - Map e Filter (retornam novo array) */
const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

// const precosFiltro = precos.filter(function(preco) {
//   return preco.includes('R$')
// })

// Retorna novo array, que contem os items em
// que o retorno da função for verdadeiro
const precosFiltro = precos.filter((preco) => preco.includes("R$")); // sintaxe reduzida
console.log(precosFiltro);

// Retorna novo array, modificado com o
// retorno de cada item da função
const precosNumeros = precosFiltro.map((preco) =>
  Number(preco.replace("R$ ", ""))
);
console.log(precosNumeros);
