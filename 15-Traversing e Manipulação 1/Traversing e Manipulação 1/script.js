const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-lista') // nao retorna nada 
const animaisLista1 = document.querySelector('.animais-descricao')

h1.outerHTML // Modificador e apresentador: Ele modifica e apresenta o conteúdo completo de um elemento, incluindo a tag em si
//  (abertura e fechamento) e o conteúdo interno.

h1.innerText // retorna somente o texto

// ! transversing como navegar pelo DOm utilizando suas propriedades e metodos

const lista = document.querySelector('.animais-lista')

 // ! console.log(lista.parentElement)  // retorna o pai do conteudo
console.log(lista.nextElementSibling)  //  retorna o proxim o elemento no mesmo nivel abaixo
console.log(lista.previousElementSibling) // retorna o elemento anterior  no mesmo nivel
console.log(lista.children) // retorna os filhos do elemento
console.log(lista.children[--lista.children.length]); // retorna o ultimo item da lista

console.log(lista.querySelector('li:last-child')); // seleciona a  ultima li tambem pode ser usado com all para selecionar toda a li

// ! element vs node

// element representam um elemento html ou seja uma tag node representa um no e pode sr um elemento (element)
// texto comentario quebra de linhas e mais 

console.log(lista.firstChild) // ! primeiro node child
console.log(lista.childNodes)  // ! todos os none filhos
console.log(lista.previousElementSibling) // ! elemento acima
console.log(lista.previousSibling) // ! node acima



// ! Manipulando Elementos

