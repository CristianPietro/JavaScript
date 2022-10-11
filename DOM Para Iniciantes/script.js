// window.alert('Hello, World')

const h1Selecionado = document.querySelector('h1');

const h1Classes = h1Selecionado.classList;

console.log(h1Classes)
console.log(h1Selecionado)


h1Selecionado.addEventListener('click', () =>{
  console.log('Clico em ', h1Selecionado.innerText)
})