# classList

* Retorna uma lista com classes do elemento. Permite adcionar, remover e verificar se contém.

````js

const menu = document.querySelector('.menu');

menu.className; // String
menu.classList; // Lista de classes
menu.classList.add('ativo')
menu.classList.add('ativo', 'mobile'); // Duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // Adiciona/remove a classe
menu.classList.contains('ativo'); // True ou False
menu.classList.replace('ativo', 'inativo');
````

# Attributes

* Retorna uma array-like os atributos do elemento.

````js

const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo
````
# getAttributes e setAttributes

* Métodos que retornam ou definem de acordo com atributos selecionado

````js

const img = document.querySelector('img');

img.getAttribute('src'); // Valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true /  false
img.removeAttribute('alt')

img.hasAttributes(); // true / false se tem algum atributo
````
**É muito comum métodos de get e set;**

# Read Only vs Writable

* Existem propriedades que não permitem a mudança de seus valores, essas são consideradas Read Only, ou seja, apenas leitura.

````js 

const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.clasName += ' vermelho'; // adciona vermelho a string 

animais.attributes = 'class="ativo"'; // Não funciona, Read Only
````

**lembre-se que podemos modificar o valor de uma propriedade <objeto.propriedade = ' '>**

 