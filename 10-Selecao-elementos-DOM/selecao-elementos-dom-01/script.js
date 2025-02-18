const animalSection = document.getElementById('animais') // ** retorna o primeiro elemento com animais

// console.log(animalSection)


// ! classe ou tag

// ** getElementByClasseName e getElementByClassTagName selecionam e retornam uma lista de elementos DOm a lista retornada esta ao vivo significa que e atualizada conforme coisas forem adicionadas




// ! seleciona pela classe, e retorna uma HTMLCollection

// const gridSection = document.getElementsByClassName('grid-section')
// console.log(gridSection)

//const contato = document.getElementsByClassName('grid-section contato') // posso passar duas classes porem  so ira aparecer o elemento com essas duas classes nao separados ou com so uma 

//console.log(contato) // reorna  o primeiro elemento

// ! seleciona todas as Ul`s, e retorna uma HTMlcollection

 //const ul = document.getElementsByTagName('ul')

 // console.log(gridSection[0])


// ________________________________________________________________________________________________________________________________________

// ! Seletor geral unico

// ** querySelector retorna o primeiro elemento que combinar com o seu seletor css

const animais = document.querySelector('.animais')
const contato = document.querySelector('#contato')
const ultimoItem = document.querySelector('.animais-lista:last-child')
const linkCss = document.querySelector('[href^="https://"')
const primeiroUL = document.querySelector('ul')

// ! busca dentro do ul apenas

const navItem = primeiroUL.querySelector('li')


// _________________________________________________________________________________________________________________________________________________


// ! seletor geral lista

const gridSection = document.querySelectorAll('.grid-section')
const listas = document.querySelectorAll('ul')
const titulos = document.querySelectorAll('.titule')
const fotosAnimais = document.querySelectorAll('.animais img')

// ** console.log(grindSection[1]) retorna o segundo elemento

console.log(fotosAnimais)