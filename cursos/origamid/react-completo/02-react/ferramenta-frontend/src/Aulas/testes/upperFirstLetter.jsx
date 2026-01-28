export function upperFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function upperFirstLetters(str) {
  return str
    .split(" ") // divide por espaço em branco, para que você tenha um array de palavras
    .map((word) => word[0].toUpperCase() + word.slice(1)) // mapeia cada palavra, capitalizando a primeira letra
    .join(" "); // junta tudo de volta com um espaço;
}
