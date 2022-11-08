const tabMenu = document.querySelectorAll(".js-tab-menu li");
const tabContent = document.querySelectorAll(".js-tab-content section");
tabContent[0].classList.add('ativo')

if(tabMenu.length && tabContent.length){


  function activeTab(index){
    tabContent.forEach((content) =>{
      content.classList.remove('ativo');
    })
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) =>{
    itemMenu.addEventListener("click", () => {
      activeTab(index)


    })
  })
}

