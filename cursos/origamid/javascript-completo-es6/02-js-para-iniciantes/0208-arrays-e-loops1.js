var videoGames = ["Switch", "PS5", "XBOX"];

console.log(videoGames);
var ultimoItem = videoGames.pop(); // remove o último item do array e retorna ele
console.log(videoGames);
console.log(ultimoItem);

videoGames.push("3DS"); // adicionado no final do array
console.log(videoGames);
console.log(videoGames.length); // quantidade de elementos do array

// Loops

// For Loop
// o ideal é usar o let
// loop -> início;condição;incremento
for (var numero = 0; numero < 10; numero++) {
  console.log("numero:", numero);
}

// While Loop

var i = 0;
while (i <= 100) {
  console.log("i:", i);
  i = i + 5 // não precisa ser sempre incremento i++ (incremento de 1 em 1)
}
