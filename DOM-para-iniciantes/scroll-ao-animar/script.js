
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
const ativoClass = 'ativo'

accordionList[0].classList.add(ativoClass)
accordionList[0].nextElementSibling.classList.add(ativoClass)

function activeAcordion(){
  this.classList.toggle(ativoClass)
  this.nextElementSibling.classList.toggle(ativoClass)
}

accordionList.forEach((item) =>{
  item.addEventListener("click", activeAcordion)
})
}

initAccordion()


/**
 *  # SCROLL SUAVE -  LINK  INTERNO
 */

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollView(event){
  event.preventDefault()

  const href = event.currentTarget.getAttribute('href');
  
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
  })

}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollView)
});

/**
 *  # ANIMAÇÃO AO SCROLL
 */

 const sections = document.querySelectorAll('.js-scroll')
 const windowMetade = window.innerHeight * 0.6

 function animaScroll(){
  sections.forEach((section) =>{

    const sectionTop = section.getBoundingClientRect().top;
    const isSection = (sectionTop - windowMetade < 0);

    if(isSection){
      section.classList.add('ativo');
    }else{
      section.classList.remove('ativo');
    }
  });
 }
 animaScroll();

 window.addEventListener("scroll", animaScroll);

