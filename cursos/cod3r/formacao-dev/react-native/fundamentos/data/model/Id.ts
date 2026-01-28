export default class Id {
  static gerar() {
    return `${Id.parte()}-${Id.parte()}-${Id.parte()}`;
  }

  private static parte() {
    return Math.random().toString(36).substring(2, 9);
  }
}

// console.log(Id.gerar());
// console.log(crypto.randomUUID()); // já vem pronto do javascript
