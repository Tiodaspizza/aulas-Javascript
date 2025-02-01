// ! operadores de atribuicao

var x = 5;
var y = 10;

x += y; // ! x = x + y (15)
x -= y; // ! x = x - y (-5)
x *= y; // ! x = x * y (50)
x /= y; // ! x = x / y (0.5)
x **= y; // ! x =x ** y (9765625)


var numero = 20;
numero += 10
console.log(numero)


// ! operador ternario

var idade = 19
var podeBeber = (idade >= 18) ? 'Pode beber ' : 'nao pode beber'
console.log(podeBeber)

// ! if abreviado

// ! nao e necessario abrir e fechar as chaves {} quando retornarmos  apenas uma linha de codigo

var possuiFaculdade = true;

if (possuiFaculdade) console.log('Possui faculdade');
else console.log('nao possui faculdade')


 // !  ou
if (possuiFaculdade)
 console.log('possui Faculdade')
else
 console.log('nao possui faculdade')