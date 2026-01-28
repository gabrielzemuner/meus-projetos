var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado; // this permite acessar as propriedades e métodos do objeto
  },
  // outra forma de definir função dentro de um objeto
  area2(lado) {
    return lado * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.area2(4));

console.log(quadrado);

// Math -> objeto
// console é um objeto
// log é um método de console
console.log(Math.PI); // propriedade
console.log(Math.random()); // método

function html(strings, ...values) {
  // Junta os pedaços da template string com os valores interpolados
  return strings.reduce((acc, str, i) => acc + str + (values[i] ?? ""), "");
}

var componentsTeste = {
  header: "",
  main: "",
  footer: "",
  title(texto) {
    return html`
      <div>
        <h1>${texto}</h1>
      </div>
    `;
  },
};


