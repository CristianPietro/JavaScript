#  Documents Object MOdel [DOM]

* É uma interface que representa  docmentos HTML  e XML através de objetos. 
  Com ela é possível manipular a estrutura, estilo  e conteúdos destes documentos.

  ````js

  console.log(window)

  // window é o objeto global do browser
  // possui diferentes métodos e propriedades

  window.innerHeight; // retorna a altura do browser
  ````

  *o inspecionar o elemento com o Chrome, você está vendo a representação oficial do DOM*

  # Window e Document
  

  * São objetos principais do DOM, boa parte da manipulação é feita através dos sus métodos e propriedades.

````js
  window.alert('Isso é um alerta')
  document.body; // retorna o body
  document.querySelector("h1") // Seleciona o primeiro h1
  alert('Isso é um alerta'); // Funciona
````
 
**O window é um objeto global, por isso não precisamos chamar ele na frente dos seu métodos e propriedades**

# Node

* Toda a tag HTML é representada pelo objeto Element e por isso herda os seus métodos e propriedades.
  Element é um tipo de objeto Node.

  ````js

  const titulo = document.querySelector('h1');

  titulo.innerText; // Retorna o texto
  titulo.classList; // retorna as classes
  titulo.id; // Retorna o id
  titulo.offsetHeight; // retorna a altura do elemento

  titulo.addEventListener('click', callback);
  // ativa a função callback ao clink no titulo
  ````