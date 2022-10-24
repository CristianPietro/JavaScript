//Navengando pelos elelementos

const element = document.querySelector("body")

console.log(element.childNodes)

/*
Elementos filhos
*/

// First chilld and firstElementChild
console.log(element.firstElementChild)

// lastChild lastElementChild
console.log(element.lastElementChild)

/*
buscando irmãos
*/

// nextSibling nextElementSibling
console.log(element.nextElementSibling)

//previousSibling  previousElementSibling

console.log(element.previousElementSibling)

//


/**
 * Criando e adcionando elementos
 */


//createElement
const div = document.createElement('div')
div.innerText = "Olá devs!"

const outraDiv = document.createElement('div')
outraDiv.innerText = "Antes"

const divInserir = document.createElement('div')
divInserir.innerText = "Div inserida"

//append prepend
const body = document.querySelector('body')
body.append(div)
body.prepend(outraDiv)

//insetBefore

body.insertBefore(divInserir, outraDiv)

