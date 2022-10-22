# Funções

- Bloco de códigos que podem ser executado e reutilizado. Valores podem ser repassados por  uma função e a mesma retorna outro valor.

````js

function areaQuadrado(lado){
  return lado * lado;
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4

````

*** Chamada de function declaration ***

````js

function pi(){
  return 3.14;
}

var total = 5 * pi(); // 15.7
````

*** Parênteses () executam uma função.

---

# Parâmetros e Argumentos

* Ao CRIAR uma função, você pode defininir PARÂMETROS
* Ao EXECUTAR  uma função, você pode passar  ARGUMENTOS

````js

// peso e altura são paâmetros

function imc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc;
}

imc (80, 1.80)  // 80 e 1.80 são argumentos
imc (60, 1.70) // 60 e 1.70 são argumentos
````
*Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também*

# Parênteses executa a função

````js

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Você gosta do céu';
  } if else(cor === 'verde'){
    return 'Você gosta da natureza'
  } else{
    return 'Você não gosta de nada'
  }
}

corFavorita(); // retorna 'Você não gosta de nada
````

*Se apenas definirmos a função como function e não executarmos a mesma, nada que estiver dentro dela ira acontecer*


# Argumentos podem ser funções

* Chamadas de CALLBACK, geralmente são funções que ocorrem após algum evento

````js

addEventListener('click', () =>{
console,log('Clicou');
});

/// A função posui dois argumentos
// Primeiro é  a strin 'click'
// Segundo é a função anônima
````
*Funções anônimas são aquelas em que o nome da função não é definido, escritas como 'function() {}' ou "() => {}"*

# Pode ou não retornar um valor

* Qunado não definimos o RETURN, ele irá retornar undefined. O código interno da função é executado normalmente, independente de existir o valor do return ou não

````js

function imc2(peso, altura){
  const imc2 = peso / (altura ** 2);
  console.log(imc2);
}

imc2(80, 1.80); // retorna o i,mc
console.log(imc2(80, 1.80)) // retorna o imc e undefined
````

# Valores retornados

* Uma função pode retornar qualquer tipo de dado e até outra função

````js

function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Informe sua idade';
  } else if(idade >= 60){
    return true;
  } else{
    return false;
  }
}
````

*Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa prática*

# Escopo

* Váriaveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

````js
function precisoVisitar(paisesVisitados){
  var totalPaises = 193;
  return `ainda faltam ${totalPises - paisesVisitados} países`
}
console.log(totalPaises); // erro, totalPaises não definidos
````

# Escopo Léxico

* Funções conseguem ecessar variáveis que foram criadas no contexto pai

````js

var profissao = 'Gamer';

function dados(){
  var nome = 'Pietro';
  var idade = 26;
  function outrosDados(){
    var endereco = 'Osório';
    var idade = 27;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'Pietro, 27, Osório, Gamer'
outrosDados(); // retorna erro
````

# Hoisting

*Antes de executar uma função, o JS  'move' todas as funções declaradas para a memória

````js

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc)
}
````