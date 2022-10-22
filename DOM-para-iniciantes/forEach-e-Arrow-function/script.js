const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, arrey){
  console.log(index)
});

//

const titulos = document.getElementsByClassName('titulo');
  const titulosArray = Array.from(titulos);

  titulosArray.forEach(function(item){
    console.log(item);
  });

  //

  const imagens = document.querySelectorAll('img')
  imagens.forEach((item, index) =>{
    console.log(item, index)
  });

