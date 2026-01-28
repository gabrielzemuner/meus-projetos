/* Tudo é objeto em JS */
const menu = {
  seletor: ".principal",
};

console.log(menu.seletor);
console.log(menu.seletor.toUpperCase());

/* Functions */
function upperName(name) {
  return name.toUpperCase();
}

// arrow function
const lowerName = (name) => {
  return name.toLowerCase();
};

console.log(upperName("Gabriel"));
console.log(lowerName("Gabriel"));

// Criar expressão com função
const upperName2 = function (name) {
  return name.toUpperCase();
};

console.log(upperName2("Gabriel"));

// arrow function sintaxe reduzida
const lowerName2 = (name) => name.toLowerCase();

console.log(lowerName2("Gabriel"));

/* Desestruturação (destructuring) */
// objetos
function handleMouse(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY);
}

// Irá definir uma constante para cada propriedade
// dentro de event, que tiver o mesmo nome que a constante.
function handleMouseMove(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

// Podemos desestruturar diretamente o parâmetro
function handleMouse2({ clientX, clientY }) {
  console.log(clientX, clientY);
}

// document.addEventListener('click', handleMouse)

// arrays
const frutas = ["banana", "uva"];
const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);

// exemplo simulando hooks react
const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro);

/* Operador Rest - pegar o restante dos itens  */
function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList("Google", "André", "Rafael", "Item 2");

/* Spread - espalhar itens de um array */
const numeros = [5, 10, 20];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [...numeros, 24, 13, 30];
console.log(numeros2);

const carro = {
  cor: "Azul",
  portas: 4,
};

const cloneCarro = { ...carro };

const carroEsportivo = { turbo: true, ...carro };

console.log(carroEsportivo);
