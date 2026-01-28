// Operadores de Atribuição
// utilizado como forma de abreviar o código

var x = 5;
var y = 10;
console.log((x += y)); // x = x + y (15)
x = 5;
y = 10;
console.log((x -= y)); // x = x - y (-5)
x = 5;
y = 10;
console.log((x *= y)); // x = x * y (50)
x = 5;
y = 10;
console.log((x /= y)); // x = x / y (0.5)
x = 5;
y = 10;
console.log((x %= y)); // x = x % y (0)
x = 5;
y = 10;
console.log((x **= y)); // x = x ** y (9765625)
x = 5;
y = 10;

// Operador Ternário
// Abreviação de condicionais com if e else
// condição ? true : false

var idade = 19;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber

// If Abreviado
// Não é necessário abrir e fechar as chaves {} quando retornamos apenas 1 linha de código

var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui facludade");
else console.log("Não possui faculdade");

// ou
// código comentado pq o autoformat identa igual código acima
// if (possuiFaculdade)
//     console.log('Possui faculdade')
// else
//     console.log("Não possui faculdade");