var videoGame = ['Switch', 'PS4', 'Xbox'];


console.log(videoGame[1])

//

var carros = ['Audi', 'Mercedez', 'BMW'];

carros.pop(); //  Remove o último intem e retorna ele
carros.push('Ferrari'); // Adcionar um item no final da Array
carros.lenght; // 3

console.log(carros.pop())
console.log(carros.length)

//

/*for (var numero = 0; numero < 10; numero ++){
  console.log(numero);
}*/


//


 i = 0;
while(i < 5){
  console.log(i);
  i++
} 

//

/* var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'] ; 
for(var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
} */

//


/*var games = ['Switch', 'PS4', 'Xbox', '3DS'];

for (var b = 0; b < games.length; b++){
  console.log(games[b]);
  if(games[b] === 'Xbox'){
    break;
  }
}*/


var games1 =  ['Switch', 'PS4', 'Xbox', '3DS'];

games1.forEach(function(item1){
  console.log(item1)
});