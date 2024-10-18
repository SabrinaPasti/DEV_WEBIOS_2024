// Pergunte ao usuário:

// Qual o nome do usuário
let nome = prompt(`Qual é o seu nome?`)
alert(`Olá ${nome} Seja bem-vindo!`)

// Qual sua idade e o Bairro onde mora
let idade = prompt(`Qual sua idade?`)
let bairro = prompt(`Qual bairro você mora?`)

//Passe o nome do usuário para letras maiúsculas
let nome2 = nome.toUpperCase();
console.log(nome2)

//Crie um programa que solicite o usuário dois números inteiros e exiba a soma deles na tela
let numero1 = Number(prompt(`Digite um número`))
let numero2 = Number(prompt(`Digite mais um número`))
let resultado = numero1 + numero2
alert('A soma entre os dois números é ' + resultado)