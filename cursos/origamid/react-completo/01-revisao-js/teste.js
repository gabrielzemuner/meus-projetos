// fetch("https://ranekapi.origamid.dev/json/api/produto")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });

// fetch("https://ranekapi.origamid.dev/json/api/produto")
//   .then((response) => response.json())
//   .then((produtos) => {
//     const container = document.getElementById("produtos");

//     produtos.forEach((produto) => {
//       // cria um "card" de produto
//       const article = document.createElement("article");
//       article.style.border = "1px solid #ccc";
//       article.style.padding = "10px";
//       article.style.marginBottom = "10px";

//       // título
//       const titulo = document.createElement("h2");
//       titulo.textContent = produto.nome;

//       // preço
//       const preco = document.createElement("p");
//       preco.textContent = `Preço: R$ ${produto.preco}`;

//       // imagem (se existir)
//       if (produto.fotos && produto.fotos.length > 0) {
//         const img = document.createElement("img");
//         img.src = produto.fotos[0].src;
//         img.alt = produto.fotos[0].titulo || produto.nome;
//         img.style.maxWidth = "200px";
//         article.appendChild(img);
//       }

//       // adiciona tudo dentro do article
//       article.appendChild(titulo);
//       article.appendChild(preco);

//       // joga o article dentro do container
//       container.appendChild(article);
//     });
//   })
//   .catch((erro) => {
//     console.error("Erro ao buscar produtos:", erro);
//   });

fetch("https://ranekapi.origamid.dev/json/api/produto")
  .then((response) => response.json())
  .then((produtos) => {
    const container = document.getElementById("produtos");

    const html = produtos
      .map((produto) => {
        return `
          <article style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">
            <h2>${produto.nome}</h2>
            <p>Preço: R$ ${produto.preco}</p>

            ${
              produto.fotos && produto.fotos.length
                ? `
                  <img
                    src="${produto.fotos[0].src}"
                    alt="${produto.fotos[0].titulo || produto.nome}"
                    style="max-width:200px;"
                  />
                `
                : ""
            }
          </article>
        `;
      })
      .join("");

    // Injeta o HTML com as tags <article>, <h2>, etc.
    container.innerHTML = html;
  })
  .catch((erro) => {
    console.error("Erro ao buscar produtos:", erro);
  });
