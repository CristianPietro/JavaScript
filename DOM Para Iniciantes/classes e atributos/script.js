const menu = document.querySelector('.menu')

menu.classList.add('ativo')
menu.classList.remove('azul')


if (menu.classList.contains('azul')){
  menu.classList.add('possui-azul')
} else{
  menu.classList.add('nao-possui-azul')
}

//

const animais = document.querySelector('.animais');

//

const img = document.querySelector('img')
const imgSrc = img.getAttribute('alt');

img.setAttribute('alt', 'é uma raposa')

//

const carro = {
  portas: 4,
  andar: function(km) {
    console.log(`Andou ${km}`)
  }
}
