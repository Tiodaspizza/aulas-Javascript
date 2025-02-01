// var videoGames = ['Switch', 'PS4', 'XBOX']

// console.log(videoGames[0])
// console.log(videoGames[1])

// ! metodos e propriedades de uma array

// var videoGames = ['Switch', 'PS4', 'XBOX']

// videoGames.pop() // ! retorna o ultimo item e o remove
// videoGames.push('3DS') // ! ira adicionar o item ao ultimo lugar do array

// ! for loop

// for (var numero = 0; numero < 10; numero++){
//  console.log(numero)

// }

// ! while loop

// var  i = 0
// while (i < 10) {
//  console.log(i)
//  i++
// }

// ! arrays e loops

// var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// for (var item = 0; item < videoGames.length; item++) {
//   console.log(videoGames[item]);
// }

var videoGames = ["Switch", "PS4", "Xbox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}


// ! for Each e um metodo que executa uma funcao para cada item da array é uma forma mais simples de utilizarmos um loop com arrays(ou array-like)

var frutas = ['Laranja', 'pera', 'maca', 'banana'];
frutas.forEach(function (fruta) {
 console.log(fruta)
})

