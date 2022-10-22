// Adcione a classe ativo a todos os itens do menu

const listaMenu = document.querySelectorAll('.menu a')

listaMenu.forEach((item) =>{
  item.classList.add('ativo')
})

//Remova todos as classes ativo de todos os itens do menu e mantenha apenas do primerio

listaMenu.forEach((item) =>{
  item.classList.remove('ativo')
})

listaMenu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt

const img = document.querySelectorAll('img')

img.forEach((imgs) =>{
   const possuiAtributo = imgs.hasAttribute('alt')
   console.log(imgs, possuiAtributo)
})

