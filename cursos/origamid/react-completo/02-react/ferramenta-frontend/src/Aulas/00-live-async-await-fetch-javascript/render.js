export function render(data) {
  const app = document.getElementById("app");

  data.forEach((produto) => {
    app.innerHTML += `
      <div class="produto">
        <img src="${produto.fotos[0].src}" alt="${produto.fotos[0].titulo}"
        <div>
          <h1>${produto.nome}</h1>
          <p>R$ ${produto.preco}</p>
        </div>
      </div>
    `;
  });
}
