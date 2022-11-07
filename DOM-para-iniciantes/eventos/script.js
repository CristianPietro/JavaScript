
/**
 * ADD EVENT LISTENER
 */


/*

const img = document.querySelector("img");

console.log(img)

img.addEventListener("click", () => {
  console.log("clicou")
})

*/







/**
 *  CALLBACK SEMPARADO
 */


/*

const img = document.querySelector("img")
function callback(){
  console.log("clicou yeah")
}
img.addEventListener("click", callback)

*/








/**
 *  EVENT
 */

 /*
 const img = document.querySelector("img")

 function callback(event){
   console.log(event)
 }
 img.addEventListener("click", callback)
*/





/**
 *  PROPRIEDADES DO EVENTO
 */

/*
const animaisLista =  document.querySelector(".animais-lista")
function executarCallback(event){
  const currentTarget = event.type
  console.log(currentTarget)
}
animaisLista.addEventListener("click", executarCallback)
*/







/**
 * evennt.preventDefault()
 */

/*
const linkExterno = document.querySelector('a[href^="http"]')

function clickNoLink(event){
  event.preventDefault();
  console.log(event.currentTarget.href)
}

linkExterno.addEventListener("click", clickNoLink)
*/





/**
 * THIS
 */

/*
const link = document.querySelector('a[href^="http"]')
function callback(event){
  event.preventDefault()
  console.log(this.getAttribute("href"))
}

link.addEventListener("click", callback)
*/


/**
 * DIFERENTES EVENTOS
 */

/*
 const h1 = document.querySelector("h1")

 function callback(event){
   console.log(event.type, event)
 }
 h1.addEventListener("mousemove", callback)

 const img = document.querySelector("img")
function retorno(event){
  console.log(this.getAttribute('src'))
}

img.addEventListener("click", retorno)
*/




/**
 * KEYBOARD
 */

function eventoTecla(event){
  if (event.key === 'a') {
    document.body.classList.toggle('OnePiece')
  }else if (event.key === 'b'){
    document.body.classList.toggle('Naruto')
  }
}

window.addEventListener("keydown", eventoTecla)

