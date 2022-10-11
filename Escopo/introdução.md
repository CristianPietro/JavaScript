# Escopo de função

* Váriaveis declaradas dentro de funões não são acessadas fora da mesma

````js 

function showCar(){
var car = 'fusca';
console.log(car);
}

showCar(); // Fusca in the console
console.log(carr); // car is not defined
````

*scope avoids name conflicts*

# Váriavel global (erro)

* Declarar váriaveis sem a palavra chave var, const ou let, cria uma váriavel que pode ser acessada de quaquer scopo (GLOBAL). Isso é um erro.

````js 

function displayCar(){
  car1 = 'gol';
  console.log(car1);
}

displayCar(); // gol
console.log(car1); // gol
````

*'Use astrict' impede isso.


# Escopo de função pai

* Váriaeis declaradas no escopo pai da função, conseguem ser acessadas pelas funções

````js

var bike = 'caloi'

function showBike(){
  var phrase = `My bike is ${bike}`
  console.log(frase);
}

showBike(); // My bike is caloi
console.log(bike); // caloi

````


# Escopo de bloco

* Variáveis criadas com VAR, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma váriável é ultilizando CONST e LET.

````js

if(true){
  var fruit = 'Apple';
  console.log(fruit);
}
console.log(fruit); // Apple
````