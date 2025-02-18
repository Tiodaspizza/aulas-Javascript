// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anosTitulo = [1959, 1962, 1970, 1994, 2002];

for (var i = 0; i < anosTitulo.length; i++) { 
   console.log(`o brasil foi campeao nos anos de ${anosTitulo[i]}`) 
}

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
 var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var i = 0; i < frutas.length; i++){
 console.log(frutas[i])
 if (frutas[i] === 'Pera') {
  break;
 }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1]


//! exercicios chat gpt

// ! 1 verificando titulos copa


var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

for (var i = 0; i < brasilCampeao.length; i++){
 if (brasilCampeao === i) {
  return "o Brasil foi campeao"
 } else "nao foi campeao"
}


function myFunction(a, b) {
   if (a === b) {
      return true
   } else {
      return false
   }
}console.log(myFunction(2,2))