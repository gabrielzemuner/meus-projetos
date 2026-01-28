// no javascript os tipos são "genéricos", definidos de acordo com o valor que definimos da variável...
// no arquivo tsconfig.json, conseguimos definir regras para tratar variáveis do tipo any no nosso código. Podemos tratar como advertência (warning), ou como erro...
let x: any = 5;
console.log(x, typeof x);

x = 'João';
console.log(x, typeof x);

x = [1, 2, 3, 4];
console.log(x, typeof x);
