/* Expressões - momentos no react onde só podemos usar expressão */
const grupoA = 100;
const grupoB = 200;

// if else NÃO É uma expressão, não conseguimos usar em JSX
if (grupoA > grupoB) {
  console.log("Grupo A ganhou");
} else {
  console.log("Grupo B ganhou");
}

// usando mesma lógica dentro de uma expressão
// operador ternário
const vencedor = grupoA > grupoB ? "Grupo A venceu" : "Grupo B venceu";
console.log(vencedor);

const numeros = [2, 3, 4, 5, 6];
const total = numeros.filter((numero) => numero > 4);
console.log(total)

const active = true;
const button = active && "Botão está ativo"; // o que está na direita do '&&' é exibido apenas se o que está na esquerda (ex: 'active') for true

console.log(button);
