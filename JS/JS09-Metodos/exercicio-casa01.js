console.clear()

// Exercício 01

// Crie um Array unidimensional com 8 posições contendo os seguintes valores 17, 43, 8, 4, 97, 56, 29, 95 em cada posição irá conter um valor do tipo number.

let num = [17, 43, 8, 4, 97, 56, 29, 95];


// Verificação
num.forEach( num => {
    if (num % 2 === 0) {
        console.log(`O número ${num} é par`)
    }  else {
        console.log(`O número ${num} é impar`)
    }
})