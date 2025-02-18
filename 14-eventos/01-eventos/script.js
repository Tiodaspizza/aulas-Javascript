// ! addEventListener

// ** O método addEventListener é usado para adicionar uma função (callback) a um elemento.
// ** Essa função será ativada assim que um evento específico ocorrer no elemento.

  // * Exemplo de como selecionar um elemento:
  // const img = document.querySelector('img')

  // ! A estrutura para usar o addEventListener:
  // ** elemento.addEventListener(event, callback, options)

  // Exemplo de uso:
  // img.addEventListener('click', function () {
  //   console.log('clicou')
  // }) 

// ! Callback
// ** A boa prática é separar a função de callback de dentro do addEventListener.
// ** Isso significa declarar a função separadamente em vez de passar uma função anônima.

const img = document.querySelector('img')

function callback() {
  console.log('clicou')
}
img.addEventListener('click', callback)
// ! ------------------------------------------------------------------------------------------------------------------------------------------------


// ! Event (Evento)

const imgs = document.querySelector('img')

function callback(event) {
  console.log(event)  // Exibe informações sobre o evento no console
}

// imgs.addEventListener('click', callback)   // Ativa evento de click

// ! ------------------------------------------------------------------------------------------------------------------------------------------------


// ! Propriedades do Event (evento)

const listaAnimais = document.querySelector('.animais-lista')

function executarCallback(event) {
  // O currentTarget é o elemento no qual o evento foi registrado (referência ao "this").
  const currentTarget = event.currentTarget;

  // O target é o elemento que realmente acionou o evento.
  const target = event.target;

  // O type é o tipo do evento que ocorreu (por exemplo, 'click', 'mouseover', etc.).
  const type = event.type;

  // O path contém a cadeia de elementos por onde o evento passou (propagação do evento).
  const path = event.path;

  // Exibe o caminho da propagação do evento no console.
  console.log(path);
}

// ! ------------------------------------------------------------------------------------------------------------------------------------------------


// ! Prevenir o comportamento padrão do evento no navegador

// ** O método preventDefault() é usado para impedir o comportamento padrão de um evento, 
// ** como no caso de um link externo, onde o link não será seguido.
const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event) {
  event.preventDefault()  // Previne o comportamento padrão do evento (abrir o link)
  console.log(event)  // Exibe o evento no console
}

linkExterno.addEventListener('click', handleLinkExterno)

// ! ------------------------------------------------------------------------------------------------------------------------------------------------


// ! O 'this' no contexto de eventos

// ** A palavra-chave 'this' faz referência ao elemento no qual o evento foi registrado
// ** No caso de eventos, ela fará referência ao elemento que chamou o addEventListener.

const img1 = document.querySelector('img')

function callback(event) {
  console.log(this)  // 'this' retorna a imagem em si
  console.log(this.getAttribute('src'))  // Exibe o atributo 'src' da imagem
}

img1.addEventListener('click', callback)

// ! ------------------------------------------------------------------------------------------------------------------------------------------------


// ! Diferentes tipos de eventos

// ** Eventos como 'click', 'scroll', 'resize', 'keydown', 'mouseenter', entre outros,
// ** podem ser adicionados a diferentes elementos, como 'window' e 'document' também.

const h1 = document.querySelector('h1')

function callback(event) {
  console.log(event.type, event)  // Exibe o tipo do evento e o evento no console
}

// h1.addEventListener('click', callback)
// h1.addEventListener('mouseenter', callback)
// window.addEventListener('scroll', callback)
// window.addEventListener('resize', callback)
// window.addEventListener('keydown', callback)


// ! ------------------------------------------------------------------------------------------------------------------------------------------------


// ! Keyboard (Teclado)

// ** Eventos de teclado podem ser usados para adicionar atalhos e facilitar a navegação no site
// ** Aqui, estamos alterando uma classe no body ao pressionar a tecla 'f', para ativar um modo fullscreen.

function handleKeyboard(event) {
  if (event.key === 'f') {
    document.body.classList.toggle('fullscreen')  // Alterna a classe 'fullscreen' no body
  }
}

window.addEventListener('keydown', handleKeyboard)


// ! ------------------------------------------------------------------------------------------------------------------------------------------------


// ! foreach e Eventos

// ** O método addEventListener pode ser usado em múltiplos elementos.
 // ** Quando há uma lista de elementos, usamos um loop (por exemplo, foreach) para adicionar o listener a cada um deles.

// const imgs1 = document.querySelectorAll('img')

// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute('src')
//   console.log(src)
// }

// imgs1.forEach((img) => {
//   img.addEventListener('click,igmSrc')
// });