//  transforme o objeto abaixo em um constructor function

function Pessoa(nomePessoa, idadePessoa){
  this.nome = nomePessoa;
  this.idade = idadePessoa;
  this.andar = () =>{
  console.log(this.nome + ' andou')
  }
}
const Caminhada = new Pessoa('Pietro', 26, 'andou')


//  crie 3 pessoas, joão - 20 anos, maria - 25 anos, Bruno - 15 anos

const Joao = new Pessoa('João', 20)
const Maria = new Pessoa('Maria', 25)
const Bruno = new Pessoa('Bruno', 15)


// Crie uma constructor Function (Dom) para manipulaçao
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e metodos:
// 
// Elements, retona nodelist com elementos selecionados
//  addclasse, adciona a classe a todos os elementos
//  remove class, remove a classe a todos os elementos

function Dom(seletor){

  // this.element = () =>{
  //   return document.querySelectorAll(seletor);
  // },

  const elementList = document.querySelectorAll(seletor);
  this.element = elementList

  // this.ativar = () =>{
  //   this.element().childNodes.classList.add('classe')
  // },
  this.addClass= function(classe){
    elementList.forEach((element) =>{
      element.classList.add('classe')
    })
  },

  // this.desativar = () =>{
  //   this.ativar().classList.remove('classe');
  // }
  this.removeClass= function(classe){
    elementList.forEach((element) =>{
      element.classList.remove('classe')
    })
  }

}

const listaItens = new Dom('li')
