# 7 TIPOS DE DADOS

- Todos são primitivos exceto os OBJETOS

````js

var nome = "Pietro";  //string
var idade = 26; //number
var possuiFaculdade = false; //booleean
var time; //undefined
var comida = null; //null
var simbolo = Symbol(); //symbol
var novoObjeto = {};  //object
````

*** Primitivos são dados imutaveis ***

---

# Verificação de dados

````js

var nome = "Pietro";
console.log(typeof nome)
// retorna string

````

*** <Typeof null> retorna object

---

# string

- Você pode somar string e assim concatenar as palavras

````js

var nome = "Cristian";
var sobrenome = "Pietro"
var nomeCompleto = nome + ' ' + sobrenome;

````

---

# Aspas duplas, Simples e template string

````js

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // inválido
````

*** Não necessáriamente precisamos atribuir valores a uma variável. ***


---

# Tamplete string


````js

var gols = 1000;
var frase1 = ' Romario fez' + gols + 'gols';
var frase2 = `Romario fez ${gols} gols`  ; // Ultilizando tamplete string

````

*** Você deve passsar expressões / váriaveis dentro de ${} ***