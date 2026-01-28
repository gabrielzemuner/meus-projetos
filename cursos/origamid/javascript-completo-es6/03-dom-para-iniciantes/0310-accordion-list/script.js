// Aula 0309
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  // Verificar se os itens existem na dom pra lógica ser executada
  // Evita também erros no console do browser...
  if (tabMenu.length && tabContent.length) {
    // Inicializar classe ao carregar página
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
}
initTabNav();

// Aula 0310
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    // Inicializar classe ao carregar página
    accordionList[0].classList.add(activeClass); // setinha
    accordionList[0].nextElementSibling.classList.add(activeClass); // texto

    function activeAccordion() {
      const element = this; // this retorna o próprio elemento... Poderia ser utilizado event.currentTarget (utilizando o event como parâmetro da função -> activeAccordion(event))
      const nextElement = this.nextElementSibling;

      element.classList.toggle(activeClass);
      nextElement.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
