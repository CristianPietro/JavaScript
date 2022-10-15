# Array

* É um grupo de valores geralmente relacionados, Servem para guadarmos diferentes valores em um única váriavel

````js

var videoGames = ['Switch', 'PS4', 'Xbox'];;

videoGame(0); // Switch
videoGame(10); // PS4
````
*Acesse um elemento com [n]*


# métodos e propriedades de uma Array

````js

var carros = ['Audi', 'Mercedez', 'BMW'];

carros.pop(); //  Remove o último intem e retorna ele
carros.push('Ferrari'); // Adcionar um item no final da Array
carros.lenght: // 3
````

*Exstem diverso outros métodos, como map, reduce, forEach e mais que veremos mais pra frente*

# For Loop

* Fazem repetidamente até que uma condição seja atingida

````js

for (var numero = 0; numero < 10; numero ++){
  console.log(numero);
}
// Retorna  0 a 9 no console
````

*o for loop possui 3 partes, inicio, consição e incremento*

# While loop

````js

let i = 0;
while(i < 10){
  console.log(i);
  i++
}
// retorna de 0 a  9 no console
````

*o for loop é mais comum*


# Arrays and Loops

````js

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'] ; 
for(var i = 0; i < videoGames.lenght; i++ ){
  console;log(videoGames[i])
}
````
*for loop é o mais comum*


# Break

* O loop irá parar casoencontro  palavra break

````js

var games = ['Switch', 'PS4', 'Xbox', '3DS'];

for (var b = 0; b < games.lenght; b++){
  console.log(games[b]);
  if(games[b] === 'Xbox'){
    break;
  }
}
````


//


# forEach

* forEach é um metodo que executa uma função para cada item da Array.  É uma forma mais simples de ultilizarmos um loop com arrays (ou array-like).

````js

var games1 =  ['Switch', 'PS4', 'Xbox', '3DS'];

games1.forEach(function(item1){
  console.log(item1)
});

// O argumento item1 sera atribuido dinamicamente
````

*podemos passar os seguintes parâmentros item, index, array*