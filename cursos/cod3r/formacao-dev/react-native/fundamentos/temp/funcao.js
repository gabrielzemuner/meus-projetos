function Teste(modelo) {
  this.modelo = modelo;
}

const t1 = new Teste("Civic");
console.log(t1);

function Contador(inicial = 0) {
  this.numero = inicial;

  this.incrementar = function () {
    this.numero++;
  };

  this.decrementar = function () {
    this.numero--;
  };
}

const c1 = new Contador();
const c2 = new Contador(100);

c1.incrementar();
c1.incrementar();

c2.decrementar();
c2.decrementar();

console.log(c1.numero);
console.log(c2.numero);
