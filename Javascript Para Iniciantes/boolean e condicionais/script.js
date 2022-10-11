var possuiGraduação = true;

if (possuiGraduação) {
  console.log('possui graduação');
  var x = 26;
} else {
  console.log('Não possui graduação');
}

console.log(x)

var possuiGraduação = true;
var possuiDoutorado = false;

if(possuiDoutorado){
  console.log('Possui graduação e doutorado');
} else if (possuiGraduação) {
  console.log('Possui graduação mas não Doutorado');
} else {
  console.log('Não possui graduação')
}


var condional = (5 - 10) && (5 + 5);

if(condional){
  console.log('Verdadeiro')
} else{
  console.log('Falso')
}


var corFavorita = 'verde';

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
  default:
    console.log('Feche os olhos');
}