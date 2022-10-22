// retornorne a url da pagina atual ultilizando o objeto WINDOW

const local = window.location.href;
console.log(local)

// Seleciona o primeiro elemento da página que possua classe 

const elementoAtivo = document.querySelector('.ativo');

console.log(elementoAtivo)

//retorna a linguagem do navegador
const idioma = window.navigator.language
console.log(idioma)

//retorna a largura da janela

const janela = window.innerWidth;
console.log(janela)