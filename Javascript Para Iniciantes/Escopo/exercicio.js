// Por qual motivo o código abaixo retorna com erros?

{
  var cor = 'preto';
  const marca = 'fiat';
  let portas = 4;
}

// console.log(var, marca, porta)

// Não se passa plavra chave como argumento
// const e lat não são identificadas fora do escopo



//  como corrigir o erro abaixo

const dois = 2;

function somarDois(x) {
  
  return x + dois;
}
function dividirPorDois(x) {
  return x / dois;
  
}

console.log(somarDois(4))
console.log(dividirPorDois(6))


// o que fazer para retornar 500?

const numero = 50;

for (let numero = 0; numero < 10; numero++ ){
  console.log(numero)
}

const  total = 10 * numero;
console.log(total)