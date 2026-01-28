var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

// O for loop é o mais comum

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

// Podemos usar break pra parar um loop
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}

// forEach -> é um método de array
videoGames.forEach(function (item, index, array) {
  console.log("forEach:", item, index, array);
});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copasBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copasBrasil.forEach(function (item) {
  console.log(`O brasil ganhou a copa de ${item}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)
