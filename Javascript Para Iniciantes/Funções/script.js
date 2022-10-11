function areaQuadrado() {
console.log('Função ativa')
}

areaQuadrado();

function areaQuadrado1(lado) {
  return lado * lado
  }
  console.log(areaQuadrado1(10))
  //areaQuadrado1(5);

  function pi(){
    return 3.14;
  }
  
  var total = 5 * pi(); // 15.7

  console.log(total)

  function imc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
  }
  
  imc (80, 1.80) // 80 e 1.80 são argumentos
  imc (60, 1.70) // 60 e 1.70 são argumentos

  console.log(imc(80, 1.80))

  function corFavorita(cor){
    if(cor === 'azul'){
      return 'Você gosta do céu';
    } else if(cor === 'verde'){
      return 'Você gosta da natureza'
    } else{
      return 'Você não gosta de nada'
    }
  }
  
  corFavorita();
  console.log(corFavorita('azul'))

  addEventListener('click', () =>{
    console.log('Clicou');
    });

    function imc2(peso, altura){
      const imc2 = peso / (altura ** 2);
      console.log(imc2);
    }
    
    imc2(80, 1.80); // retorna o i,mc
    //console.log(imc2(80, 1.80)) // retorna o imc e undefined


    function terceiraIdade(idade){
      if(typeof idade !== 'number'){
        return 'Informe sua idade';
      } else if(idade >= 60){
        return true;
      } else{
        return false;
      }
    }

    console.log(terceiraIdade(60))

    function precisoVisitar(paisesVisitados){
      var totalPaises = 193;
      return `ainda faltam ${totalPaises - paisesVisitados} países`
    }
    //console.log(totalPaises);
   // erro, totalPaises não definidos

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

console.log(dados()); // Retorna 'Pietro, 27, Osório, Gamer'
//outrosDados(); 
// retorna erro

imc3(80, 1.80); // imc aparece no console

function imc3(peso, altura) {
  const imc3 = peso / (altura ** 2);
  console.log(imc3)
}