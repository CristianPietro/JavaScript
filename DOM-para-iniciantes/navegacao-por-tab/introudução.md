````js

//Selecionando os elementos HTML

const tabMenu = document.querySelectorAll(".js-tab-menu li");
const tabContent = document.querySelectorAll(".js-tab-content section");

// A primeira desdrição sempre ativa como padrao

tabContent[0].classList.add('ativo')

// Função para colocar e retirar a class ativo

  function activeTab(index){
    tabContent.forEach((content) =>{
      content.classList.remove('ativo');
    })
    tabContent[index].classList.add('ativo');
  }

//loop na lista de imagem
// pegar o index da imagem
//fazer conexão com a descrição
// através do index

  tabMenu.forEach((itemMenu, index) =>{
    itemMenu.addEventListener("click", () => {
      activeTab(index)
    })
  })

``````

// CSS

````CSS

// Display  invisível onde não tem class ativo

.js-tab-content section{
  display: none;
}

// Display visível onde tem class ativo

.js-tab-content section.ativo{
  display: block !important;
  animation: show .5s forwards;
}

// Animação de surgimento da decrição

@keyframes show{
  0%{
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  100%{
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
}

````