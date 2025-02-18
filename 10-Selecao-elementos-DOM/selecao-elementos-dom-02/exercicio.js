// Retorne no console todas as imagens do site
todasImages1 = document.querySelectorAll('img')
console.log(todasImages1)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const todasImages = document.querySelectorAll('img[src^="imagem"]');
// Selecione todos os links internos (onde o href começa com #)
linksinternos = document.querySelectorAll('[href^="#"]')
console.log(linksinternos)
// Selecione o primeiro h2 dentro de .animais-descricao
firstElement = document.querySelector(' .animais-descricao h2')
console.log(firstElement)
// Selecione o último p do site

latestElement = document.querySelectorAll('p:last-child')
console.log(latestElement[latestElement.length - 1])

