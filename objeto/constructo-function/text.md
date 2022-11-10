
# Aula 1 **New keyword**

````js

const honda = new Carro()

//  1 - criar um novo objeto
honda = {};

//  2 - definir o protótipo
honda.prototype = Carro.prototype

//  3 - aponta a variável this para o objeto
this = honda;

// 4 - executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 - retorna o novo objeto
return honda = {
  marca: 'Marca';
  preco: 0;
}
````

<!--  -->

## Aula 2 **This keyword**

````js

const Dom = {
  seletor: 'li',
  element(){
    return document.querySelector(this.seletor);
  },
  ativo(){
    this.element().classList.add('ativo')
  },
}

Dom.ativo(); // adciona ativo ao li
Dom.seletor = 'ul';
Dom.ativo; // adciona ativo ao ul
````