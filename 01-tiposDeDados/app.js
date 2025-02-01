// 7 diferentes tipos de dados

 
var idade = 28 // Number
var possuiFaculdade = true // bolean
var time // undefined
var comida = null // null
var simbolo = Symbol() //symbol
var novoObjeto = {} // object


var name = "Matheus"
console.log(typeof nome)

var nome = "Matheus " // String 
var sobrenome = "Novaes"
var nomeCompleto = nome + sobrenome
console.log(nomeCompleto)


var gols = 1000 
var frase = 'Romario fez ' + gols + " gols"
console.log(frase)

var ano = "2018"
var mes = 8
console.log(ano + mes)

  /*Aspas Duplas, Simples e Template String
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido

Não necessariamente precisamos atribuir valores a uma variável

*/
// template String

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
