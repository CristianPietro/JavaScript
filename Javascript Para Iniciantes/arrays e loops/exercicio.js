// Crie uma array com os anos que o Brasil ganhou a copa do mundo
//1959, 1962, 1970, 1994, 2002

let copa = [1959, 1962, 1970, 1994, 2002];

console.log(copa[0])

//interaja com a array ultilizando um loop
//para mnstrar no console a seguinte mensagem 'O Brasil ganhou a copa de ${}

 for(var i = 0; i < copa.length; i++){
  console.log(`Brasil ganhou a copa de ${copa[i]}`)
 }


 // Intereja com um loop nas frutas abaixo e pare ao chegar em Pera

 let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

 for (let fruta = 0; fruta < frutas.length; fruta++){
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera'){
    break;
  }
}
