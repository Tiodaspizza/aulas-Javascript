var pessoa = {
 nome: 'Matheus',
 idade: 28,

}
console.log(pessoa.idade)


// ! É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
 lados: 4,
 area: function (lado) {
  return lado * lado;
 },
 perimetro: function (lado) {
  return this.lados * lado
 }
}

console.log(quadrado.area(5));

// ! Abreviação de area: function() {} para area() {}, no ES6+


var quadrado = {
 lados: 4,
 area(lado) {
   return lado * lado;
 },
 perimetro(lado) {
   return this.lados * lado;
 },
}

// ! Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// ! criar um objeto -- um obejto e criado utilizando chaves {}
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

// ! Dot Notation Get  === Acesse propriedades de um objeto utilizando o ponto .

var menu = {
 width: 800,
 height: 50,
 backgroundColor: '#84E',

}

menu.backgroundColor = '#000' // ! Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var bg = menu.backgroundColor;

menu.color ='blue' 

