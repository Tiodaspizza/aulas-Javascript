// ! existem dois valores booleanos false ou true

// var possuiGraduacao = true;
// var possuiDoutorado = false;

// ! condicional if else

// var condicional = true;
// if (possuiGraduacao) {
//  console.log('possui graduacao');
// } else {
//  console.log('Nao possui graduacao')
// }

var nome = "Matheus";

if (nome) {
  console.log(nome);
}

// ! truty e falsy
// ! existem valores que retornam true e outros que retornam false quando verificados em uma expressao boleana

/* if(falsy)
   if(0) ou - 0
   if(NaN)
   if(null)
   if(undefined)
   if('') ou " "

*/

// ! operador logico de negacao

/* if (!true) = false
   if (!1) = false 
   if (!"") = true
   if(!undefined) = true
   if(!!' ') = true
   if(!!'') = false
   */

// ! operadores de comparacao

//    10 > 5
//    5 > 10
//    20 < 10
//    10<= 10
//    10 >=11

//    10 == '10' // true
//    10 == 10 // true
//    10 === '10' // false
//    10 != 15 // true
//    10 != '10' // false
//    10 !== '10' // false

//    var x = 'Gatos'
// console.log(x !== 'Gato')

// ! operadores logicos

// var animal = 'cao'

// true && true // true
// true && false // false
// false && true // false
// 'Gato' && 'cao' // cao
// (5 - 5) && (5 + 5) // 0
// 'Gato' && false // false
// (5 >= 5)  & (3< 6 ) // true

if (5 - 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

// ! operador logico ou ||

true || true; // true
true || false; // false
false || true; // true
"Gato" ||
  "cao"(
    // 'Gato'
    5 - 5
  ) ||
  5 + 5; // 10
"Gato" ||
  false(
    // 'Gato'
    5 >= 5
  ) ||
  3 < 6; // true

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

//! switch

//!  com o switch  voce pode verificar se uma variavel e igual a diferentes valores utilizndo o case. caso ela seja igual voce pode fazer alguam coisa e utilizar a palavra chave break; para cancelar a continuacao o  valor default ocorrera caso nenhuma das anteriores seja verdadeira


var corFavorita = 'amarelo'

switch (corFavorita) {
  case "Azul":
    console.log("olhe para o ceu");
    break;
  case "Vermelho":
    console.log("olhe para as rosas");
    break;
  case "amarelo":
    console.log("Olhe para o ouro");
    break;
}
