
````JS

//selecionando os elementos

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');


function scrollView(event){

  //previne o comportamento padrão
  event.preventDefault()

  // selcionando apenas o atributo href da lista
  const href = event.currentTarget.getAttribute('href');
  //atribuido o href em uma variavel
  const section = document.querySelector(href);

 //determinando a maneir como vai acontecer o scroll
  section.scrollIntoView({
    behavior: 'smooth',
  })

}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollView)
});
``