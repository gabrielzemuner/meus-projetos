export function calculateIMC(weight: number, height: number): number {
  return weight / (height * height);
}

// const IMC_RANGES: { max: number; label: string }[] = [
//   { max: 17, label: "Muito abaixo do peso" },
//   { max: 18.5, label: "Abaixo do peso" },
//   { max: 24.9, label: "Peso normal" },
//   { max: 29.9, label: "Sobrepeso" },
//   { max: 34.9, label: "Obesidade grau 1" },
//   { max: 39.9, label: "Obesidade grau 2" },
//   { max: Infinity, label: "Obesidade grau 3" }, // pega todo o resto
// ];

export const IMC_RANGES: { max: number; range: string; label: string }[] = [
  { max: 17, range: "Menos de 17", label: "Muito abaixo do peso" },
  { max: 18.5, range: "Entre 17 e 18,49", label: "Abaixo do peso" },
  { max: 24.9, range: "Entre 18,5 e 24,99", label: "Peso normal" },
  { max: 29.9, range: "Entre 25 e 29,99", label: "Acima do peso" },
  { max: 34.9, range: "Entre 30 e 34,99", label: "Obesidade I" },
  { max: 39.9, range: "Entre 35 e 39,99", label: "Obesidade II (severa)" },
  { max: Infinity, range: "Acima de 40", label: "Obesidade III (mórbida)" },
];

export function IMCResult(imc: number): string {
  const faixa = IMC_RANGES.find((r) => imc < r.max);
  return faixa!.label;

  // if (imc < 17) {
  //   return "Muito abaixo do peso";
  // } else if (imc < 18.5) {
  //   return "Abaixo do peso";
  // } else if (imc < 24.9) {
  //   return "Peso normal";
  // } else if (imc < 29.9) {
  //   return "Sobrepeso";
  // } else if (imc < 34.9) {
  //   return "Obesidade grau 1";
  // } else if (imc < 39.9) {
  //   return "Obesidade grau 2";
  // } else {
  //   return "Obesidade grau 3";
  // }
}
