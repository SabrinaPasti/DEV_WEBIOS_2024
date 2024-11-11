// Exercício 2
// Crie um Array unidimensional com 14 posições contendo os seguintes valores 17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61, 59  em cada posição irá conter um valor do tipo number.

let nums = [ 17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61, 59];

// Numeros entre 20 e 80

let numFilter = nums.filter( nums => nums > 20 && nums < 80);

console.log(`Os números entre 20 e 80 são: ${numFilter}`);
