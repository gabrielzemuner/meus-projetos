class Carro {
  constructor(private marca: string, private preco: number) {}

  frase() {
    return `O carro é da marca ${this.marca} e o preço é ${this.preco}`;
  }
}

const c1 = new Carro("Honda", 4000);

console.log(c1);
