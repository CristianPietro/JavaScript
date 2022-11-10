function Carro( marcaAtribuida, precoAtribuido){
 this.marca = marcaAtribuida;
 this.preco = precoAtribuido;
}

// const honda = new Carro();
// const fiat = new Carro()
// fiat.marca = "Fiat";
// fiat.preco = 35000

const honda = new Carro('Honda', 25.250)
const fiat = new Carro('Fiat', 15.555)

function Carro2( marca, precoInicial){
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
 }

 const vw = new Carro2("VW", 5000)


