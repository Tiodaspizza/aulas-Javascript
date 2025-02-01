// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var ageParent = 69
var myAge = 28

if (myAge >= ageParent) {
 console.log("e maior")
} else if (ageParent === myAge) {
 console.log('e igual')
}
else {
 console.log('e menor')
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // retrorna true 

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28;  // true
var possuiDoutorado = false; // false
var empregoFuturo;   // undefined
var dinheiroNaConta = 0;  // false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil == china) {
 console.log(`o brasil possui o mesmo numero habitantes que a china numero de habitantes do brasil ${brasil} milhoes`)

} else {
 console.log(`o brasil possui menos habitantes que a china numero de habitantes do brasil ${brasil}  milhoes `  )
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // true

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} // false