# Boolean

- Existem dois valores boolean FALSE ou TRUE

````js
var possuiGraduação = true;
var possuiDoutorado = false;
````

# condicionais if & Else

- Verifica se uma expressão é verdadeira IF, caso contrário o Else será ativado

````js

var possuiGraduação = true;

if (possuiGraduação) {
  console.log(possui graduação);
} else {
  console.log('Não possui graduação');
}
//Retorna possui graduação e não executa o else
````

***O valor dentro dos parênteses sempre será avaliado em TRUE ou FALSE**

# Condicionais Else if

- Se o If não for verdadeiro. ele testa o Else if

````js

var possuiGraduação = true;
var possuiDoutorado = false;

if(possuiDoutorado){
  console.log('Possui graduação e doutorado');
} else if (possuiGraduação) {
  console.log('Possui graduação mas não Doutorado');
} else {
  console.log('Não possui graduação')
}
````

# Truthy e Falsy

-Existem valores que retornam true e outros valores que retornam false quando verificadas em uma expressão boolena

````js

// Falsy

if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if(' ') // ou " " ou `` 
````

*** O resto é truthy ***


# Operadores lógicos de negação

- O operador (!), nega uma operação booleana, ou seja, (!true) é a false.

````js

if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) //true
if(!!'  ') // true
if(!!' ') //False
````

*** Você pode usar (!!) para verificar se uma expressão é truthy ou false ***

# operadores de comparação

-Vão sempre retornar valores booleano

````js 

10 > 5; //true
5 > 10; //false
20 < 10; // false
10 <= 10; //true
10 >= 11; //False

````

# Operadores lógicos #

&& compara se uma expressão e outra é verdadeira

````js

true && true; //true
true && false; //false
false && true; //false
'Gata' && 'Cão'; //Cão
(5 - 5) && (5 +5); //0
'Gato' && false; //false
(5>=5) && (3 < 6); //true
````

*** Se duas expressóes forem # true # ele irá retornar o ultimo valor verificado, se algum valor for # false # ele irá retornar o mesmo enão irá continuar a verificar os próximos ***


# Switch

- Com o (SWITCH) você pode verificar se uma variável é igal á diferentes valores ultilizando o (CASE). Caso ele seja igual, você  você pode fazer alguma coisa e utilizar a palavra chave (BREAK) para cancelar a continuação. O valor de defaul ocorrerá caso nenhuma das anteriores seja verdadeiras.

````js

var corFavorita = 'Azul';

switch (corFavorita){
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Vermelho':
    console.log('Olhe para as rosas');
    break;
  case 'Amarelo':
  console.log('Olhe para o sol');
  break
}
````