// Crie m objeto com seu dados pessoais
//deve posuir pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: 'Cristian',
  sobrenome: 'Pietro',
  idade: 26,
  }
  
  

//Crie um método no objeto anterior que mostra seu nome completo

dados.nomeCompleto = function (){
  return `${this.nome} ${this.sobrenome}`
}

//modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}

carro.preco =3000

console.log(carro.preco)

//Crie um objeto de um cachorro que represente um labrador,
//preto cm 10 anos, que late ao ver um homem

var dog = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
 latir(pessoa){
  if(pessoa === 'homem'){
    return 'Latir'
  } else{
    return 'Apenas late para homem'
  }
 }
}
