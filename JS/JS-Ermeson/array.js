let grupo01 = ['Baco', 'Gabi', 'Jeferson', "Sabino"]
console.log(typeof grupo01)

let grupo02 = ['Sabrina', 'Jeferson', 'Duda', 'Carlos', 'Felipe', false, 5]
//                  0           1       2        3           4      5    6
console.log(grupo02[2]);
console.log(typeof grupo02[5]);

console.log(grupo02.length); // quantos espaços tem dentero do meu array

let grupo03 = ['Gol', 'Palio', 'Audi A3', 'Peugeout', 'Civic']
console.log(grupo03[3] + ' e ' + grupo03[4]);

// methods: normalmente ele inicia com um ponto (.) e um parametro que podemos passar

let cupons = 'Desc10' // 10%

let menor = cupons.toLowerCase() //letra minuscula
let maior = cupons.toUpperCase() //letra maiuscula

console.log(cupons + ' ' + maior + ' ' + menor);

let imc = 19.9548546
let novoValor = imc.toFixed(2) // definir valor após a virgula
console.log(imc + " " + novoValor);

