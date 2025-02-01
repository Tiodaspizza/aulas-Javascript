function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(pi());

function imc(peso, altura) {
  imc = peso / (altura * altura);
  return imc;
}
console.log(imc(80, 1.76));

function corFavorita(cor) {
  if (cor === "azul") {
    return "eu gosto do ceu";
  } else if (cor === "verde") {
    return "eu gosto de mato";
  } else {
    return " eu nao gosto de nada";
  }
}
console.log(corFavorita("azul"));

// addEventListener("click", function () {
//   console.log("oi");
// });

// ! Pode ou não retornar um valor
//! Quando não definimos o return, ela irá retornar undefined.
// ! O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc = peso / (altura * altura);
  console.log(imc);
}

imc2(80, 1.8);
console.log(imc2(80, 1.8));

// ! Valores retornados
// ! Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
 if (typeof idade !== 'number') {
 } else if (idade >= 60) {
  return true;
 } else {
  return false;
 }
}
console.log(terceiraIdade(60))

function faltaVisitar(paisesVisitados) {
 var totalPaises = 193
 return `Faltam Visitar ${totalPaises - paisesVisitados } paises `
}

console.log(faltaVisitar(20))


function dados() {
 var nome = 'Matheus';
 var sobrenome = 'Novaes';
 var sexo = 'Masculino';
 
 function outrosDados() {
   var endereco = 'Guarulhos';
   var idade = 29;
   return `${nome}, ${sobrenome}, ${idade}, ${endereco}`;
 }
 
 return outrosDados(); 
}

console.log(dados()); 
