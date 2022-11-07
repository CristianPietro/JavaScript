# addEventListenner

* adciona uma função ao elemento, esta se chama `callback`, 
que sera ativado assim que certo `evento` ocorrer neste elemento.

````js
 const img = document.querySelector('img');

 // elemento.addEventListenner(event, callback, option)
 img.addEventListenner('click', function(){
  console.log('Clicou');
 })
````

**O terceiro parâmetro é opcional**


# Callback

É boa prática separar funções de callback do addEventListenner, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

````js

const img= document.querySelector('img');
function callback(){
  console.log('Clicou')
}

img.addEventListenner('click', callback); 
img.addEventListenner('click', callback()); // undefined
img.addEventListenner('click', function(){
  console.log('clicou')
});
img.addEventListenner('click', () =>{
  console.log('clicou')
})
````

## Event

O primeiro parâmetro do callback é referente ao evento que ocorreu

````js

const img = document.querySelector('img')

function callback(event){
  console.log(event)
}

img.addEventListenner('click', callback);
````
**Geralmente ultilizam o `e` como parâmetro**

# Propriedades do event

````js

const animaisLista = document.querySelector('.animais-lista');

function executarCallBack(event){
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path)
}

animaisLista.addEventListenner('click', executarCallback)

````

## event.preventDefault()

Previne o comportamento padrão do evento no browser.
No caso de um link externo, por exemplo, ire previnir que o link seja ativado


## This

A palavra this é uma palavra especial de js,
que pode fazer refeerência a diferentes objetos dependendo do
contexto. No caso do eventos, ele fara referencia ao elemento em que o addEventListener foi adcionado

## Keyboard

voce pode criar atalhos para facilitar a  navegação do seu site,
atravé de eventos [keyboard]



