# ID
 
* [getElementById] seleciona e retorna elementos do dom

````js

//Selecionar pelo ID

const animaisSection = document.getElementById('animais')
const contatoSection = document.getElementById('contato')

//retorna null caso não exista
const naoExiste = document.getElementById('teste')
````

# Classe e Tag

* [getElementsByClassName] e [getElementsByTagName] selecionam e retornam uma lista de elementos do DOM. A lista retornada esta ao vivo, significa que se os elementos forem adicionados, ele será automaticamente atualizada.

````js

//Seleciona pela classe, retona um HTMLCollection

const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

//retorna o primeiro elemento
console.log(gridSection[0]);

````

# Seletor Geral Único

[querySelector] retorna o primeiro elemento que combinar com o seu seletor CSS


# Seleto Geral Lista

[querySelectorAll] retorna todos os elementos compatíveis com o seletor CSS em uma nodeList

**A diferente entre [getElementsByClassName], é que esse é estatico, ou seja, tudo que for adcionado depois não vai ser atualizado automaticamente.**


# HTMLCollection vs Nodelist

*A diferença está nos métodos e propriedades de embas. Além disso a nodeList retornada com [querySelectorAll] é estática.


# Array-Like

* HTMLCollection e NodeList são Array-Like, parece uma array mas não são. O métodos de array [forEach()] por exemplo, existe apenas no NodeList

**É possível transformar uma Array-Like em uma Array real, usando o método [Array.from(gridSection)]**

