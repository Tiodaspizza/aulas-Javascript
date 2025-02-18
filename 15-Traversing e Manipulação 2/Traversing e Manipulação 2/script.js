// // ! manipulando Elementos

// // * e possível mover elementos no DOM com métodos de Node

// const lista = document.querySelector('.animais-lista');  // Seleciona a lista (corrigido para '.animais-lista')
// const contato = document.querySelector('.contato');      // Seleciona o elemento 'contato'
// const titulo = document.querySelector('.titulo');        // Seleciona o título
//     // Seleciona o elemento 'animais'

// // Exemplo de adicionar o título ao final de 'animais':
// //animais.appendChild(titulo); // * Move título para o final de 'animais'

// // Exemplo de mover o elemento 'animais' antes de 'titulo':
// //contato.insertBefore(animais, titulo); // * Insere 'animais' antes de 'titulo' dentro de 'contato'

// // Exemplo de remover o título de 'contato':
// //contato.removeChild(titulo); // * Remove 'titulo' de 'contato'

// // Exemplo de substituir 'titulo' por 'lista' dentro de 'contato':
// //contato.replaceChild(lista, titulo); // * Substitui 'titulo' por 'lista' dentro de 'contato'

// // ! novos elementos

//  // * podemos criar novos elementos com o metodos createElement()

// // Seleciona o elemento com a classe 'mapa' no HTML
// const mapa = document.querySelector('.mapa')

// // Seleciona o elemento com a classe 'animais' no HTML
// const animais = document.querySelector('.animais');

// // Cria um novo elemento <h1>
// const novoH1 = document.createElement('h1');

// // Define o texto que aparecerá dentro do novo <h1>
// novoH1.innerText = 'Novo Titulo';

// // Adiciona a classe 'titulo' ao novo <h1> para aplicar estilos CSS
// novoH1.classList.add('titulo');

// // Anexa o novo <h1> dentro do elemento com a classe 'mapa'
// mapa.appendChild(novoH1);


// // ! Clonar elementos
 
// // * todo elemento selecionado e unico. para criarmos um novo elemento baseado no anterior e necessario outlizar o metodo cloneNode()

// // Seleciona o primeiro elemento <h1> encontrado no documento
// const titulo1 = document.querySelector('h1');

// // Seleciona o primeiro elemento <h2> encontrado no documento
// const titulo2 = document.querySelector('h2');

// // Armazena a referência de 'titulo1' na variável 'novoTitulo' (apontam para o mesmo elemento)
// const novoTitulo = titulo1;

// // Clona o elemento 'titulo1' (true indica que a cópia incluirá os elementos filhos, se houver)
// const cloneTitulo = titulo1.cloneNode(true);

// // Seleciona o elemento com a classe 'contato' no HTML
// const contato1 = document.querySelector('.contato');

// // Adiciona o clone do título dentro do elemento 'contato'
// contato1.appendChild(cloneTitulo);
