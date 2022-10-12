// reterne no console todas as imagens do site

const imgSite = document.querySelectorAll('img')
console.log(imgSite)


//Retorne no console apenas imagens que começam com a palavra imagem

const imagemAnimais = document.querySelectorAll('img[src^="img-css/imagem"]')
console.log(imagemAnimais)


// Selecione todos os links internos (onde o href começa com "#")

const linksSite = document.querySelectorAll('[href^="#"]')
console.log(linksSite)


//Selecione o primerio h2 dentro de .animais-descricao

const firstH2 = document.querySelector('animal-descricao, h2')
console.log(firstH2)

//Selecione o último p do site

const lastP = document.querySelectorAll('p')
console.log(lastP[24])