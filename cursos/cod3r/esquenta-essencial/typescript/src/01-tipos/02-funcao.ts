// Exemplo 1
function bomDia(): void {
    console.log('Bom dia!');
}

bomDia();

// Exemplo 2
function somar(a: number, b: number): number {
    return a + b;
}

const resultado = somar(10, 20);
console.log(resultado);

// o typescript consegue inferir algumas tipos sem declarar de forma explícita, por ex:
function somar2(a: number, b: number) {
    return a + b;
}

const resultado2 = somar2(1, 2);
console.log(resultado2);
