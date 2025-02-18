

/*
// ! classList

// ** retorna uma lista com as classes do elemento permite adicionar. remover e verificar se contem.

// const menu = document.querySelector('.menu')

  menu.className; // ** string
menu.classList // * lista de classes
menu.classList.add ('ativo')  // ! adiciona a classe ativo no elemento
menu.classList.add('ativo', 'mobile') // ! adiciona duas classes ao elemento
menu.classList.remove('ativo') // ! ira remover a classe ativo do elemento
menu.classList.toggle('ativo'); //! Se o elemento já tiver a classe 'ativo', ela será removida; se não tiver, ela será adicionada.
menu.classList.contains('ativo') // ! true ou false
menu.classList.replace('ativo','inativo')



//menu.classList.add('ativo') // * adicionando a classe ativo ao elemento 
//menu.classList.remove('ativo') // * removendo a classe ativo do elemento
//console.log(menu.classList[0]) // ** verificar primeiro elemento do array-like


//menu.className = 'teste azul'  // ** para colocar uma classe no elemento subistituindo as existentes
//menu.className +=  'teste azul', ' vermelho' // ** ira adicionar a classe mantendo a anterior

// ! attributes 

  // ** const animais = document.querySelector('.animais') 

animais.attributes; // ** retorna todos os elementos
animais.attributes[0] // * retorna o  primeiro elemento


// ! getAttribute e setAttribute

// * metodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img')
img.getAttribute('src')  // valor do src
img.setAttribute('alt', 'texto alternativo') // muda o alt
img.hasAttribute('id')  // true or false
img.removeAttribute('alt')    // remove o alt

img.hasAttribute(0)  // true ou false se tem algum atributo

const srcImg = img.getAttribute('src')
img.setAttribute('alt', 'e uma raposa')  // adicionando alt com o texto ao elemento
console.log(srcImg)


// ! read only vs writable

const animais = document.querySelector('.animais')
animais.className // string com o nome das classes
animais.className = 'azul' // subistitui compleamente a string
animais.className += 'adiciona vermelho a string'

animais.attributes = 'class = "ativo"' // nao funciona read-only

*/