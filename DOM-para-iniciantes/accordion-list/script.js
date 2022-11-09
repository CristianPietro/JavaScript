
/**
 *  # NAVEGAÇÃO POR TAB
 */

function initTab() {
const tabMenu = document.querySelectorAll(".js-tab-menu li");
const tabContent = document.querySelectorAll(".js-tab-content section");

tabContent[0].classList.add('ativo');

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
    });
  });
}
}
initTab();


/**
 * # ACCORDION LIST
 */

function initAccordion() {
const accordionList = document.querySelectorAll('.js-accordion-list dt');
accordionList[0].classList.add('ativo')
accordionList[0].nextElementSibling.classList.add('ativo')

function activeAcordion(){
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item) =>{
  item.addEventListener("click", activeAcordion)
})
}

initAccordion()