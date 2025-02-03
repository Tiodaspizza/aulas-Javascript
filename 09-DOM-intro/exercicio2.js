// Retorne no console todas as imagens do site

const allImages = document.querySelectorAll("img")
console.log(allImages)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="imagem"]');  
console.log(imagens);
imagens.forEach(img => console.log(img.src));


// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2")
console.log(primeiroH2)
// Selecione o último p do site
const paragrafo = document.querySelectorAll('p');
console.log(paragrafo[paragrafo.length -1])
