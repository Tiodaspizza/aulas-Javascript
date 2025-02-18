// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img')
const alturaImg = img.offsetTop
console.log(alturaImg)
// Retorne a soma da largura de todas as imagens




function somaImagens() {
 const imagens = document.querySelectorAll('img')
 let soma = 0
 
 imagens.forEach((imagem) => {
  soma = soma + imagem.offsetWidth
  console.log(imagem.offsetWidth)
 })


 window.onload = function () {
 somaImagens()
}


}

 
// Verifique se os links da página possuem
const linksExternos = document.querySelectorAll('a');
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)


linksExternos.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWidth > 48 && linkHeight > 48) {
    console.log(link, 'possui acessibilidade');
  } else {
    console.log(link, 'não possui boa acessibilidade');
  }
});

 
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if (browserSmall) {
 const menu = document.querySelector('.menu')
 menu.classList.add('menu-mobile')
}