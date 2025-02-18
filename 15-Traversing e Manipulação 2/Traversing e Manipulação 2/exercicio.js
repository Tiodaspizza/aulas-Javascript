// Duplique o menu e adicione ele em copy

menu = document.querySelector('.menu')
copy = document.querySelector('.copy')


 const novoMenu = menu

const cloneMenu = novoMenu.cloneNode(true)

copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('.faq-lista dt');
console.log(primeiroDt.innerHTML);

console.log(primeiroDt.nextElementSibling)

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML