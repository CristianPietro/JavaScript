// Verifique se a sua idade é maior do que algum parente
// Dependendo do resultado coloque 'é maior', 'è menor'

var Pietro = 26;
var Ana = 12;

if (Pietro === Ana){
  console.log('é maior');
} else{
  console.log('é menor');
}

// qual valor é retornado na segiuinte expressão

var expressão = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressão)


//Veriique se as seguintes variaveis são Truthy ou Falsy[

var nome = 'Pietro';
var idade = 26;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com a China

var Brasil = 207;
var china = 1340;

if(Brasil > china){
  console.log('Brasil possui mais habitantes que a china');
} else if(Brasil === china){
  console.log('China e Brasil possuem o mesmo número de habitates')
}else{
console.log('A china é maior que o Brasil')
}

// o que irá aparecer no console?

if(('Gato' === 'gato') && (5 > 2 )) {
  console.log('Verdadeiro')
}else{
  console.log('Falso')
}