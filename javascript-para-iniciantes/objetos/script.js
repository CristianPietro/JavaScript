var pessoa = {
  nome: 'Pietro',
  idade: 26,
  profissao: 'gamer',
  faculdade: true,
  
  }
  
  console.log(pessoa)

  //

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
  
//

Math.PI; // 3.14
Math.random(); // numeor aleatório

var pi = Math.PI;
console.log(pi) // 3.14
