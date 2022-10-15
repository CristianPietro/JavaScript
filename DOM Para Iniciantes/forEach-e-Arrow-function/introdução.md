# forEach

* Constantemente vamos selecionar uma lista de itens no DOM
  A melhor forma de interagirmos com os memos é ultilizando o método forEach

  ````js

  const imgs = document.querySelectorAll('img')

  imgs.forEach(function(item){
    console,log(item);
  });

  ````

  # Parâmetro do forEach

  * O primeiro parâmetro é o callback, ou seja, a função que sera ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index, Array:

  ````js

  const imgs = document.querySelectorAll('img')

  imgs.forEach(function(valorAtual, index, array){
    console.log(item); // o item atual no loop
    console.log(index); // o número no index
    console.log(array); // A array completa
  });
  ````

  # forEach e Array

  * For Each é um método de Array, alguns objetos   array-like possuem este método. caso não possua, o ideal  é transforma-los em uma array. 

  ````js

  const titulos = document.getElementsByClassName('titulo');
  const titulosArray = Array.from(titulos);

  titulosArray.forEach(function(item){
    console.log(item);
  });
  ````

  # Arrow Function

  * Sintaxe curta em relação a <function expression> . Basta remover a palavra chave <function> e adcionar a <fat arrow => após os argumentos.

  ````js

  const imagens = document.querySelectorAll('img')
  imagens.forEach((item) =>{
    console.log(item)
  });
  ````

  # Argumentos e parênteses

````js

  // Argumento único não precisa de parêntese
 
 imgs.forEach(item => {
  console.log(item)
 });

 //Multiplos argumentos precisam de parênteses

 imgs.forEach((item, index) =>{
  console.log(item, index);
 });

 // Sem argumentos precisam de parênteses

 let i = 0;
 imgs.forEach(() =>{
  console.log(i++)
 })

````

# Return

````js

imgs.forEach(item =>{
  console.log(item)
});

img.forEach(item => console.log(item));
````

**Não é permitido fechar a linha com [;]**

