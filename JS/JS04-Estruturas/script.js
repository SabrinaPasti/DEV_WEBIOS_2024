/// Verificar se o aluno está com a camisa do ios

const aluno = "Camisa IOS"
const permitido = "Permitido"
const negado = "Negado"

if (aluno == "Camisa IOS"){
    console.log(permitido + ". Sabrina pode ver a aula");

}


// = Atribui valor
// == compara valor
// === verifica o tipo de uma variável - numérico - boleano e string

console.clear();

//Exemplo: Um jogador somente irá passar para a fase 2 se atingir 1000 pontos.

let pontos = 1000

if (pontos >= 1000) {
    console.log('Jogador passou para a fase dois');

} else {
    console.log('O jogador não pode ir para a próxima fase')
}

console.clear();

let imparPar = 18 // resto da divisao

if(imparPar % 2 == 0){
    console.log('Par')
} else {
    console.log('Impar')
}

