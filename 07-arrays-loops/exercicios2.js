var frutas = ["maça", "Laranja", "Banana", "Uva", "Melão"];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i].length > 5) {
    console.log("essa fruta tem mais de cinco letras");
  } else {
    console.log("essa fruta nao possui 5 letras");
  }
}

// var numero = [20, 35, 40, 32, 33, 57, 11]

// for (var i = 0; i < numero.length; i++){
//  console.log(numero[i])
//  if (numero[i] % 2 === 0) {
//   console.log('O numero e par')
//  } else {
//   console.log('o numero e impar')
//  }
// }

// var numero = [-20, -30, 45, 37, -42, 90, 55];

// var numerosNegativos = 0;
// for (var i = 0; i < numero.length; i++) {
//   if (numero[i] < 0) {
//     numerosNegativos++;
//   }
// }
// console.log("quantos numero negativos existem na lista " + numerosNegativos);




// var temp = [22, 25, 28, 32, 9]
// var contador = 0
// for (var i = 0; i < temp.length; i++){
//   if (temp[i] > 25) {
//     contador++;
// }
// }
// console.log(`resultados maiores que 25 graus ${contador}`)


// var numero = [10, 12, 11, 3, 9, 8,]
//  var pares = 0
// for (var i = 0; i < numero.length; i++){
//   console.log(numero[i])
//   if (numero[i] % 2 === 0) {
//     pares ++
//   }
// } 
// console.log(`o numero de numeros pares sao ${pares}`)


var numero = [10, 9, 15, 18, 12]

var divisivel = 0

for (var i = 0; i < numero.length; i++){
  console.log(numero[i])
  if (numero[i] % 3 === 0) {
    divisivel ++
  }
}

console.log(`quantidade de numeros divisiveis por tres: ${divisivel}`)