// Pode ou não retornar um valor

// Quando não definimos o return, ela irá retornar 'undefined' (exibido no console do browser)

function teste() {
  console.log(123);
}

function teste2() {
  return 123;
}

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("oi"));
console.log(terceiraIdade(60));
console.log(terceiraIdade(30));

// Escopo -> variáveis e funções definidas dentro de um bloco {} não são visíveis fora dele.

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(20));

// console.log(totalPaises) // erro -> not defined

// Ao criar uma variável do lado de fora, ela pode ser usada dentro de uma função. Agora uma variável criada dentro de uma função não é visível fora.

var totalPaisesFora = 200;
function faltaVisitarTeste() {
  console.log(totalPaisesFora);
}

faltaVisitarTeste();

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29; // substitui a variável idade que estava no escopo de fora
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()) // retorna 'André, 29, Rio de Janeiro, Designer'
// console.log(outrosDados()) // erro -> not defined

// Hoisting -> antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(1, 2) // imc aparece no console

function imc(peso, altura) {
  console.log('funcao imc')
}