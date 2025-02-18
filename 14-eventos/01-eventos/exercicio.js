// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova 
//  dos demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const LinkInterno = document.querySelectorAll('a')

LinkInterno.forEach((link) => {
 
 link.addEventListener('click', (event) => {
  event.preventDefault();
  LinkInterno.forEach((item)=> item.classList.remove('ativo'))
  link.classList.add('ativo')
 })
})
console.log(LinkInterno)

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElemento = document.querySelectorAll('body *')


function handleElemento(event){
 console.log(event.currentTarget)
}


todosElemento.forEach((elemento) => {
 elemento.addEventListener('click', handleElemento)

})

console.log(todosElemento)
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKeyBoard(event) {
 if (event.key === 't') {
   document.documentElement.classList.toggle('textomaior')
  }
}
 
window.addEventListener('keydown',handleKeyBoard)