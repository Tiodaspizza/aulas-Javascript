// Crie uma função para verificar se um valor é Truthy
function age(idadee) {
  if (idadee >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(age(75));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function matematica(perimetro) {
  return perimetro * 4;
}

console.log(matematica(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function data(nome, sobrenome) {
  return { nome, sobrenome };
}
console.log(data("matheus", "Novaes"));

// Crie uma função que verifica se um número é par

function verificar(ParouImpar) {
  if (ParouImpar % 2 === 0) {
    return " o numero e par";
  } else {
    return " o numero e impar";
  }
}
console.log(verificar(10));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipo(type) {
  return typeof type; // Retorna o tipo do argumento 'type'
}

console.log(tipo(10)); // "number"
console.log(tipo("Matheus")); // "string"
console.log(tipo(true)); // "boolean"
console.log(tipo({})); // "object"

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// addEventListener('scroll', function () {
//  console.log('Matheus');
// });

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);

// ! exercicios chat gpt

// ! 1. Crie uma função chamada positivoOuNegativo que recebe um número como parâmetro e retorna:

//! "positivo" se o número for maior que 0.
//! "negativo" se o número for menor que 0.
//! " zero" se o número for igual a 0.

function positivoOuNegativo(x) {
  var x = -10;
  if (x > 0) {
    return "positivo";
  } else if (x < 0) {
    return "Negativo";
  } else if (x === 0) {
    return "zero";
  }
}
console.log(positivoOuNegativo(0));

// ! 2 . concatenar nome e sobrenome
 
function concatenar(nome, sobrenome) {
  return nome + sobrenome
}

console.log(concatenar('Matheus ', 'Novaes'))


// ! 3 .  criar uma funcao multiplicar que recebe dois numeros

function multiplicar(a,b) {
  return a * b
} console.log(multiplicar(4,4))


// ! 4 crie uma funcao verificar 

function verificar(a) {
  if (a % 2 === 0) {
    return true
  } else {
     return false
  }
} console.log(verificar(3))


// ! 5 nomeDoDIA

function nomeDoDia(dia) {
  var dia  
  
  if (dia === 0) {
    return "domingo"
  } else if (dia === 1) {
    return "segunda-feira"
  } else if (dia === 2) {
    return "terca-feira"
  } else if (dia === 3) {
    return "quarta-feira";
  } else if (dia === 4) {
    return "quinta-feira";
  } else if (dia === 5) {
    return "sexta-feira"
  } else if (dia === 6) {
    return "sabado"
  }
} console.log(nomeDoDia(0))


// !  6 verificar idade

function verificarIdade(idade) {
  if (idade >= 18) {
    return"voce e maior de idade"
  } else {
    return "voce e menor de idade"
  }
} console.log(verificarIdade(12))