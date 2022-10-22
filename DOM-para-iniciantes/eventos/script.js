const img = document.querySelector('img');

function callback(){
  console.log('Clicou')
}

// elemento.addEventListenner(event, callback, option)
img.addEventListener('click', callback)

//

/*
function callback(event){
  console.log(event)
}


img.addEventListener('click', callback);
*/

//

const animaisLista = document.querySelector('.animais-lista');

function executarCallBack(event){
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path)
}

animaisLista.addEventListener('click', executarCallBack)