// Tema 1 - Nullish Coalescing Operator - operador pra lidar com valores nulos
// valor default pra uma variável que não está setada (variável null por exemplo)

let idade = 27;
console.log("Sua idade é: " + idade); // resultado: 27

idade = null;
console.log("Sua idade é: " + idade); // resultado: null

// 2 formas de resolver essa situação => valor default pra uma variável que não está setada
console.log("Sua idade é: " + (idade || "Não informado")); // resultado: Não informado

// porém se tivermos uma situação que idade = 0, o valor 0 também não é considerado válido para o javascript
idade = 0;
console.log("Sua idade é: " + (idade || "Não informado")); // resultado: Não informado

// 0, '', [], false, undefined, null => falsy (valores não válidos)

// nullish coalescing operator resolve esse problema do 0, ele é mais restritivo, olha apenas valores não válidos como null, undefined, não tem valor significativo, pois o 0 do exemplo acima é um valor real
console.log("Sua idade é: " + (idade ?? "Não informado")); // resultado: 0

// Tema 2 - Objetos - estrutura de dados que armazena conjuntos de chave e valor

const user = {
  name: "Diego",
  age: 27,
  address: {
    street: "Rua teste",
    number: 176,
  },
};

// verificar se algo existe dentro de um objeto
console.log("name" in user); // resultado: true
console.log("nickname" in user); // resultado: false
console.log(Object.keys(user)); // resultado: [ 'name', 'idade', 'address' ] => retorna todas as chaves do objeto
console.log(Object.values(user)); // resultado: [ 'Diego', 27, { street: 'Rua teste', number: 176 } ] => retorna todos os valores do objeto
console.log(Object.entries(user));
/* 
resultado: 
[
  [ 'name', 'Diego' ],
  [ 'age', 27 ],
  [ 'address', { street: 'Rua teste', number: 176 } ]
]
*/

// Tema 3 - Desestruturação => remover parte de um objeto pra uma variável à parte
var address = user.address; // resultado: { street: 'Rua teste', number: 176 }
console.log(address);
var { address } = user; // resultado: { street: 'Rua teste', number: 176 }
console.log(address);
var { address, age } = user; // exemplo com + de 1 variável
console.log(address, age);
var { address, age: teste } = user; // renomear variável na desestruturação
console.log(address, teste);
var { address, age, nickname = "Nome padrão" } = user; // nickname não existe no objeto user
console.log(address, age, nickname); // setar valores default

function mostrarIdade(user) {
  return user.age;
}

console.log(mostrarIdade(user));

// exemplo com desestructuring em função
function mostrarIdade2({ age }) {
  return age;
}

console.log(mostrarIdade2(user));

// Tema 4 - Rest Operator => geralmente é utilizado em conjunto com desestruturação
var { name, ...rest } = user;
console.log(name); // resultado: 'Diego'
console.log(rest); // resultado: { age: 27, address: { street: 'Rua teste', number: 176 } } => o resto do objeto user

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var first = array[0];
var second = array[1];
console.log(first, second);

// destructuring dentro de arrays
var [first, second, ...rest] = array;
console.log(first, second, rest);

// para "pular" algum item, podemos deixar ele vazio, por ex:
var [first, , third, ...rest] = array;
console.log(first, third, rest);

// Tema 5 - Short Syntax

var name = "Diego";
var age = 27;

// caso de uso short syntax => objeto onde a chave e valor têm o mesmo nome
// var user2 = {
//   name: name,
//   age: age,
// };

var user3 = {
  name,
  age,
};

console.log(user3);

// Tema 6 - Optional Chaining => tentar acessar uma propriedade de um objeto a qual ela pode não existir. Precisamos tratar o código, caso contrário irá aparecer um erro no console de 'Cannot read properties of undefined'. Os erros acontecem apenas em objetos aninhados

var user4 = {
  name: "Diego",
  age: 27,
  // address: {
  //   street: "Rua teste",
  //   number: 176,
  //   zip: {
  //     code: "89160000",
  //     city: "Rio do Sul",
  //   },
  // },
};

// console.log(user4.address.street); // Cannot read properties of undefined (reading 'street')
var exibirCep = user4.address
  ? user4.address.zip
    ? user4.address.zip.code
    : "Não informado"
  : "Não informado";

console.log(exibirCep);

var exibirCep2 = user4.address?.zip?.code ?? "Não informado";
// console.log(exibirCep2);

var user4 = {
  name: "Diego",
  age: 27,
  address: {
    street: "Rua teste",
    number: 176,
    zip: {
      code: "89160000",
      city: "Rio do Sul",
    },
    showFullAddress() {
      return "ok";
    },
  },
};

console.log(user4.address.showFullAddress());

// se o address não existir, erro
var user4 = {
  name: "Diego",
  age: 27,
};

// console.log(user4.address.showFullAddress()); // resultado: erro
console.log(user4.address?.showFullAddress() ?? "Não informado"); // resultado: 'Não informado'

// se o address existir, mas a função não existir, erro
var user4 = {
  name: "Diego",
  age: 27,
  address: {
    street: "Rua teste",
    number: 176,
    zip: {
      code: "89160000",
      city: "Rio do Sul",
    },
  },
};

// console.log(user4.address?.showFullAddress() ?? "Não informado"); // resultado: erro
console.log(user4.address?.showFullAddress?.() ?? "Não informado"); // resultado: 'Não informado'

// se a função existir, retorna ela
var user4 = {
  name: "Diego",
  age: 27,
  address: {
    street: "Rua teste",
    number: 176,
    zip: {
      code: "89160000",
      city: "Rio do Sul",
    },
    showFullAddress() {
      return "ok";
    },
  },
};

console.log(user4.address?.showFullAddress?.() ?? "Não informado"); // resultado: 'ok'

var key = "name";
console.log(user4[key]);

// os erros acontecem apenas em objetos aninhados
var user4 = {
  // name: "Diego",
  age: 27,
  address: {
    street: "Rua teste",
    number: 176,
    zip: {
      code: "89160000",
      city: "Rio do Sul",
    },
    showFullAddress() {
      return "ok";
    },
  },
};

var key = "name";
console.log(user4[key]); // resultado: undefined => não gera erro

// exemplo de erro com objeto aninhado
var user4 = {
  // name: "Diego",
  age: 27,
};

var key = "state";
// console.log(user4.address[key]); // resultado: Cannot read properties of undefined => gera erro
console.log(user4.address?.[key] ?? "Não informado"); // resultado: 'Não informado'

// Tema 7 - Métodos de array - métodos mais importantes: map, filter, every, some, find, findIndex, reduce

{
  // map
  const array = [1, 2, 3, 4, 5];

  for (const i of array) {
    console.log(i);
  }

  array.forEach((item) => {
    console.log(item);
  });

  // o que difere do map pro forEach => com map é possível fazer o retorno de um novo array com a mesma quantidade de itens do array original
  // com forEach até é possível, mas precisamos de um artifício por ex:

  {
    const novoArray = [];
    array.forEach((item) => {
      novoArray.push(item * 2);
    });

    console.log("exemplo com forEach:", novoArray); // => [ 2, 4, 6, 8, 10 ]
  }

  // com o map é possível fazer o retorno direto

  {
    const novoArray = array.map((item) => {
      return item * 2;
    });

    // map sempre vai retornar um array com o mesmo tamanho do array original
    console.log("exemplo com map:", novoArray); // => [ 2, 4, 6, 8, 10 ]
  }

  {
    const novoArray = array.map((item) => {
      if (item % 2 === 0) {
        return item * 10;
      }

      return item;
    });

    console.log(novoArray); // => [ 1, 20, 3, 40, 5 ]
  }

  // filter
  {
    // filter, diferente do map, não altera valores, apenas filtra, corta, pega um pedaço do array
    const novoArray = array.filter((item) => item % 2 !== 0); // retornar números ímpares
    console.log(novoArray);
  }

  {
    // podemos unir os métodos
    const novoArray = array
      .filter((item) => item % 2 !== 0)
      .map((item) => item * 10);

    console.log(novoArray);
  }

  // every - retorna um booleano - retorna true se todos os itens satisfazem uma condição
  const todosItensSaoNumeros = array.every((item) => typeof item === "number");
  console.log(todosItensSaoNumeros);

  // some - retorna um booleano - retorna true se apenas algum dos itens satisfazer uma condição
  const peloMenosUmItemEUmNumero = array.some((item) => {
    return typeof item === "number";
  });
  console.log(peloMenosUmItemEUmNumero);

  // find - encontrar 1 item do array (primeiro item que satisfaça uma condição)
  const par = array.find((item) => item % 2 === 0);
  console.log(par);

  // findIndex - exatamente a mesma coisa do find, porém ao invés de retornar o valor do item encontrado, ele retorna o índice daquele valor no array
  const indicePar = array.findIndex((item) => item % 2 === 0);
  console.log(indicePar);

  // reduce - pegar um array e criar uma nova estrutura de dados com base nesse array - criar algo novo
  const soma = array.reduce((acc, item) => {
    // console.log(acc, item)
    return acc + item;
  }, 0);

  console.log(soma);

  // usamos muito esses métodos de array por causa de um conceito chamado imutabilidade
}

// Tema 8 - Template Literals
{
  const name = "Diego";
  const message = "Bem-vindo, " + name;
  console.log(message);
}

{
  const name = "Diego";
  const message = `Bem-vindo, ${name}`;
  console.log(message);
}

{
  // podemos usar todos os conteúdos que já vimos, por ex: nullish coalescing operator
  // name não existe
  const name = null;
  const message = `Bem-vindo, ${name ?? "visitante"}`;
  console.log(message);
}

// Tema 9 - Promises
// nem tudo na programação é síncrono (executa exatamente no mesmo momento que mandamos executar). algumas coisas demoram pra executar informações e não podemos pausar o nosso código até aquilo devolver a resposta que esperamos
// buscar algo em um servidor - tempo de resposta - latência na resposta ex: 300ms
// precisamos que algumas coisas da nossa aplicação sejam assíncronas

{
  const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a + b);
      }, 2000);
    });
  };
  somaDoisNumeros(1, 3)
    .then((soma) => {
      console.log(soma);
    })
    .catch((err) => {
      console.log(err);
    });
}

{
  fetch("https://api.github.com/users/diego3g")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("executou fetch");
    });
}

// outra forma de trabalhar com promises
{
  async function buscaDadosNoGithub() {
    try {
      const response = await fetch("https://api.github.com/users/diego3g");
      const body = await response.json();

      console.log(body);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("executou async function");
    }
  }

  buscaDadosNoGithub();
}

// Tema 10 - ES Modules - import e export
import { somar, subtrair, PI } from "./math";
import sum from "./sum";

// console.log(somar(1, 2));
// console.log(subtrair(2, 1));
// console.log(PI)

// Named Export -> ao definir um export function necessário importar com o nome definido
// Default Export -> quando temos apenas 1 export no arquivo -> utilizamos export default function...
// com o default export, podemos dar o nome que quiser no import
import abacaxi from "./sum";
console.log(sum(1, 2));

// importar todas as funções de um arquivo e atribuir em uma variável
import * as math from "./math";
console.log(math.somar(1, 2));

// podemos também renomear função importada de um named export
import { somar as somaNumeros } from "./math";
console.log(somaNumeros(1, 2));

// poucos casos de uso -> podemos também em um determinado arquivo importar e exportar de outro
// por ex: export { soma } from './math'
