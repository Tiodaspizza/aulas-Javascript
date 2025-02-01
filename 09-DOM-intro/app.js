

const h1Selecionado = document.querySelector('h1')
const h1classes = h1Selecionado.classList;

console.log(h1classes)


// ! NODE toda tag html e representada por um objeto element e por isso herda os seus metodos e propriedades element e um tipo de objeto node

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

 //titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo


h1Selecionado.addEventListener('click', function (){
 console.log('clicou em', h1Selecionado.innerText)
})