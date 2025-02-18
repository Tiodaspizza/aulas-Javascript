// ! height width 

const listaLista = document.querySelector('.animais-lista');

const height = listaLista.clientHeight; // Altura visível (inclui padding, mas NÃO borda nem scrollbar)
const paddingHeight = listaLista.offsetHeight; // Altura total (inclui padding e borda, mas NÃO scrollbar)
const total = listaLista.scrollHeight; // Altura total do conteúdo dentro do elemento (inclui tudo, mesmo que esteja oculto por scroll)

console.log(listaLista);
console.log(height);
console.log(paddingHeight);
console.log(total);


// ** ------------------------------------------------------------------------------------------------

const section = document.querySelector('.animais')
console.log(section)
section.offsetTop // distnacia entre o topo do elemento e o topo da pagina
section.offsetLeft // distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina

// ** ------------------------------------------------------------------------------------------------

// ! getBoundingClientRect()

const section2 = document.querySelector('.animais')

const rect = section.getBoundingClientRect();

rect.height; // ! height do elemento
rect.width // ! largura do elemento
rect.top // ! distancia entre o topo do elemento e o scroll

// ** ------------------------------------------------------------------------------------------------

// ! window

window.innerWidth // ** widtg da janela
window.outerWidth // ** soma dev tools tambem
window.innerHeight // ** height da janela 
window.outerHeight // ** soma a barra de endereco

// ** ------------------------------------------------------------------------------------------------


 // ! matchMedia()

 // ** utilize um media-querie como no css para verificar a larura do browser

const small = window.matchMedia('(max-width: 600px');

if (small.matches) {
 console.log('tela menor que 600px')
} else {
 'tela menor que 600px'
}