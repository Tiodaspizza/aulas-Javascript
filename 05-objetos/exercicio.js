// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

var pessoa = {
  nome: "Matheus",
  sobrenome: "Novaes",
  endereco: "Guarulhos",
  nomecompleto() {
    return this.nome + " " + this.sobrenome;
  },
};

console.log(pessoa.nomecompleto());

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

// Modifique o valor da propriedade preco para 3000

carro.preco = 3000;
console.log(carro.preco);
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: "10 anos",
  descansando(viuHomem) {
    if (viuHomem) {
      return "latir";
    } else {
      return "nao latir";
    }
  },
};

console.log(cachorro.descansando(true));
console.log(cachorro.descansando(false));

1; // ! criar um objeto livro

var livro = {
  titulo: "harry potter",
  autor: " anonimo",
  anoPublicacao: "12/05/2024",
  descricao() {
    return `o livro ${this.titulo} foi escrito por ${this.autor} em ${this.anoPublicacao} `;
  },
};
console.log(livro.descricao());

// ! celular

var celular = {
  marca: "Samsung",
  modelo: "s29",
  preco: 4500,
  desconto() {
   var desconto = 0.1; 
   return this.preco - (this.preco * desconto);
 }
 
};
console.log(celular.desconto());

// ! contaBancaria

var contaBancaria = {
  titular: "Matheus",
  saldo: 2500,
  tipoConta: "Corrente",
 depositar(valor) {
  this.saldo += valor;
  return `Deposito de R$${valor} realizado. Saldo atual: R$${this.saldo}`
 },
 sacar(valor) {
  if (valor > this.saldo) {
   return "Saldo insuficiente!";
  } this.saldo -= valor
  return `Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`
 }
};

console.log(contaBancaria.depositar(3000))
console.log(contaBancaria.sacar(1000))
console.log(contaBancaria.saldo)

