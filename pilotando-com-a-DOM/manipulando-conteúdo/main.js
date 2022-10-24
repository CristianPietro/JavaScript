//Selecionamento de elemento

const meuTitulo = document.querySelector('h1')
const meuTitulo2 = document.querySelector('h2')

//Manipulando conteúdo

meuTitulo.textContent = "Olá Dev"

meuTitulo.innerText = "Tchau"

//Manipulando atributos

meuTitulo.setAttribute('id', 'tituloPrincipal')

//Alterando estilo com style

meuTitulo.style.color = 'red'

//Alterando estilo com classList
meuTitulo2.classList.add('active', 'pink')
meuTitulo2.classList.remove('active')
meuTitulo2.classList.toggle('active')
console.log(meuTitulo2.classList)