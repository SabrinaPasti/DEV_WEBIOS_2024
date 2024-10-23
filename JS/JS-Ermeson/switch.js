let media = 10
faltas = 4

//6.5

if (media >= 7 && faltas <= 5) {
    console.log('Aluno Aprovado')
} else if (media >= 6.5 && faltas <= 5) {
    console.log('Aluno aprovado pelo conselho')
} else {
    console.log('Aluno Reprovado')
}

//Calcule o imc do usuário , utilize também um if else para informar se o mesmo está na faixa de peso informado segundo as configurações da tabela abaixo:
// menor que 18,5 Abaixo do peso
// entre 18,5 e 25 Peso normal
// Acima de 25 acima do peso

peso = 60.5
altura = 1.68
imc = peso / (altura * altura)

if (imc < 18.5 ) {
    console.log('Abaixo do peso')
} else if (imc >=18.5 && imc <=25 ) {
    console.log('Peso normal')
} else {
    console.log('Acima do peso')
}

console.log('O seu imc atua é: ' + imc.toFixed());

// switch case
let valor = 2

switch (valor){
    case 1:
        console.log('Você foi avaliado como ótimo ')
        break;

    case 2:
        console.log('Você foi avaliado como bom ')
        break;
    
    case 3:
        console.log('Você foi avaliado como Regular ')
        break;

    case 4:
        console.log('Você foi avaliado como Ruim ')
        break;

    case 5:
        console.log('Você foi avaliado como Péssimo ')
        break;
    
    default:
        console.log('Você não foi avaliado');
        break;
}
