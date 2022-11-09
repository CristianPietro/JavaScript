
````js

// Selecionando os elementos

const accordionList = document.querySelectorAll('.js-accordion-list dt');

// formatação padrão de visualização

accordionList[0].classList.add('ativo')
accordionList[0].nextElementSibling.classList.add('ativo')

// Função para adcionar classLists
// Usando toggle para adcionar e remover

function activeAcordion(){
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo')
}

// Adcionando loop 
// selecionando todos os item
//adcionando evento click
// chamando a função que ativa as classes

accordionList.forEach((item) =>{
  item.addEventListener("click", activeAcordion)
})

````

````css

/* Display invisível para elementos sem class ativo */

.js-accordion-list dd{
  display: none;
}

/* Arrow  display inativo*/

.js-accordion-list dt::after{
  content: "⬎";
  margin-left: 5px;
}

/* Arrow  display ativo*/

.js-accordion-list dt.ativo::after{
  content: "⬏";
}

/* Display com class ativa*/
/* Elemento recebendo animação*/
/* Animação só acontece com class ativo*/

.js-accordion-list dd.ativo{
  display: block;
  animation: slideDown .5s forwards;
}

/* Criação de animação*/

@keyframes slideDown{
  0%{
    opacity: 0;
    max-height: 0;
  }
  100%{
    opacity: 1;
    max-height: 100px;
  }
}

````