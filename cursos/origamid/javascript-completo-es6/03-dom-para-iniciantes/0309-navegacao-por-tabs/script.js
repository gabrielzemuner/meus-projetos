const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

// Verificar se os itens existem na dom pra lógica ser executada
// Evita também erros no console do browser...
if (tabMenu.length && tabContent.length) {
  // Adicionar classe ativo ao primeiro elemento ao carregar a página
  tabContent[0].classList.add("ativo");

  function activeTab(index) {
    // Remover todas as classes 'ativo' dos elementos
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });

    // Acrescentar classe 'ativo' no item clicado
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => activeTab(index));
  });
}
