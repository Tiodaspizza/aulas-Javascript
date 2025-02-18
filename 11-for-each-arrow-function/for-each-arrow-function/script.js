







// ! for each constatemente vamos selecionar uma lista de itens do DOM a  melhor forma
// !  para interagirmos com os mesmos e utlizando o metodo forEach.


//const imgs = document.querySelectorAll('img')

imgs.forEach(function(item,index,array) {  // ** funcao com for each para percorrer o array
 // console.log(item)
 // console.log(index)
 // console.log(array)
})



// ! forEach e array

// ! forEach e um metodo de array. alguns objetos array-like possuem este metodo caso nao possua o ideal e transformaloem um array

const titulos = document.getElementsByClassName('titulo')

const titulosArray = Array.from(titulos)   // ** transforma o htmlCollection em array 

titulosArray.forEach(function (item) {
 //console.log(item)
})


// ! arrow Function

// ! sintaxe curta em relacao a Function expression.basta remover a palavra chave function e fat arrow => apos argumentos

const imagens = document.querySelectorAll('img')

imagens.forEach((item) => {
 console.log(item)
})

// ! argumentos e parenteses

// ** const imagens = document.querySelectorAll('img')
 
// argumento unico nao precisa de parenteses

// numeros.forEach(item => {
//  console.log(item);
// });

// ! multiplos argumentos precisam de parenteses

  //  imagens.forEach((item) => console.log(item))