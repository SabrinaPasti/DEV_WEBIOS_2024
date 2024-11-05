// Array de objetos

let aluno = {
    nome : "Sabrina",
    idade : 21,
    altura : 1.65,
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: 'Parda'
}

console.log(aluno);

//retorna apenas o nome
console.log(aluno.nome);

//retorna apenas o campo se o aluno chora
console.log(aluno.isChora);

console.log(`o aluno ${aluno.nome} chora demais? \n ${aluno.isChora}`);