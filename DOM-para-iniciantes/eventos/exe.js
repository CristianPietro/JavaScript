// Qunado o usuário clicar nios lins internos do site
// adcione a classe ativo ao item clicado e remova dos
//demais itenscaso eles possuem a mesma
//previna o comportamento padrão desses links


const linksInterno = document.querySelectorAll('a[href^="#"]') // selecionamos todos os links

function handleLink(event){
  event.preventDefault(); // prevenir comportamento padrão

  linksInterno.forEach((link) =>{
    link.classList.remove("Ativo")
  });

  event.currentTarget.classList.add('Ativo')
} // função adcionada apó o click

linksInterno.forEach((link) =>{
  link.addEventListener("click", handleLink)
}) // loop para adcionar eventos em todos os links

