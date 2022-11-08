// Qunado o usuário clicar nios lins internos do site
// adcione a classe ativo ao item clicado e remova dos
//demais itenscaso eles possuem a mesma
//previna o comportamento padrão desses links


const linksInterno = document.querySelectorAll('a[href^="#"]') // selecionamos todos os links

function handleLink(event){
  event.preventDefault(); // prevenir comportamento padrão

  linksInterno.forEach((link) =>{
    link.classList.remove("Ativo")
  });

  event.currentTarget.classList.add('Ativo')
} // função adcionada apó o click

linksInterno.forEach((link) =>{
  link.addEventListener("click", handleLink)
}) // loop para adcionar eventos em todos os links




// Selecione todos os elementos do site começando a partir do body
//ao click mostre exastamente o elemento que esta sendo clicado

/*
const allElements = document.querySelectorAll(" body *")

function showElement(event){
  const  showEvent = event.currentTarget;
  console.log(showEvent)
}

allElements.forEach((link) =>{
  link.addEventListener("click", showElement)
})

console.log(allElements)
*/




//Utilizando o código anterior, ao inves de mostrar no console
//remova o elemento que esta sendo clicado, metodo remove()

const allElements = document.querySelectorAll(" body *")

function showElement(event){
  const  showEvent = event.currentTarget;
  console.log(showEvent.remove())
}

allElements.forEach((link) =>{
  link.addEventListener("click", showElement)
})

console.log(allElements)




//  se o usuario clicar na tecla "t", aumente todo o texto do site



function highText(event){
  if(event.key === 't'){
    document.body.classList.toggle("high")
  }
}

window.addEventListener("keydown", highText)