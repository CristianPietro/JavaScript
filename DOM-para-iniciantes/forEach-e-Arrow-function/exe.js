// Mostre no console cada parágrafo do site

const todosOsP = document.querySelectorAll('p')
console.log(todosOsP)

//Mostre o texto dos parágrafos no console

todosOsP.forEach((item) =>{
  console.log(item.innerText);
})

// Como corrigir os erros abaixo

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) =>{
  console.log(item, index);
})

let a = 0;

imgs.forEach(() => console.log(a++))