# Objetos
````js
var pessoa = {
nome: 'Pietro',
idade: 26,
profissao: 'gamer',
faculdade: true,

}

pessoa.nome; //Pietro
pessoa.faculdade; // True
````

*Propriedades e metodos consistem em nome (chave) e valor*

# Métodos

* é uma propriedade que possui uma função no seu valor

````js

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado
  },
  perimetro: function (lado){
    return this.lados * lado;
  },
}

quadrado.lados; //4
quadrado.area(5); //25
quadrado.perimetro(5); //20
````

*** Abreviações de AREA: FUNCTION( ) { }  para AREA( ) { }, no ES6+**

```` js
var quadrado2 = {
lados: 4,
area (lado){
  return lado * lado
},
perimetro(lados){
  return this.lados * lados
}
}
````

# Organizar o código

* Objetos servem para organizar o coódigo em pequenas partes reutilizaveis

````js
math.pi; // 3.14
math.random(); // numeor aleatório

var pi = math.PI;
console.log(pi) // 3.14
````
* Math é jm objeto nativo de JS. 
* Já percebeu que o console é um objeto e log()
um método?