// crie uma função par af=verificar se uma valoer é truth

function isTruth(dado){
  return !!dado
}

// FAça um função que retorne o perimetro de um quadrado

function quadrado(lado) {
  const perimetro = lado ** 4;
  return perimetro;
}



//Crie uma função que verifica se o numero é par

function number(num){
  if (num  % 2 === 0) {
    console.log('é par');
  } else{
    console.log('é impar');
  }
}

console.log(number(2))


/// Crie uma função que retorna o tipo de dado do argumento passado nela.

function totalDeCarros(quantidade){
  return typeof quantidade
}

console.log(totalDeCarros(20))

// addEventLIstenner é uma função nativa do JS
// primeiro parâmetro é o evento que occorre e o segunto é o callback
//ultilize essa função para mostrar no console o seu nome completo
// quanto o evento 'click' ocorrer

addEventListener('click', ()=>{
console.log('Cristian Pietro');
});

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  
  return `ainda falta ${totalPaises - paisesVisitados} países para visitar`
}
  function jaVisitei(paisesVisitados) {
    return`Já visitei ${paisesVisitados} do total de ${totalPaises}`
  }


 

console.log(precisoVisitar(10))
console.log(jaVisitei(10))