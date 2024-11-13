// let carro = {
//     nome: nome,
//     cor: cor,
//     peso: peso,
//     modelo: modelo,
// }

// let carro1 = carro('Gol G3', 'Azul', '2000', 'Volkswagen');
// let carro2 = carro('Palio', 'Verde', '2000', 'Fiat');

class Aluno{
    constructor(nome, ano, altura, isCracha, isCamisa, cor){
        this.nome = nome;
        this.ano = ano;
        this.altura = altura;
        this.isCracha = isCracha;
        this.isCamisa = isCamisa;
        this.cor = cor;

    }

    retornaIdade(){
        let dataCompleta = new Date();
        let pegaAno = dataCompleta.getFullYear();
        return pegaAno - this.ano 
    }
}

// toda vez que chamo uma instancia devo usar o 'new' (Nova instancia == copias)
let aluno1 = new Aluno('Manassés', 1997, 1.90, true, true, 'Black');

console.log(` A idade do manassés é: ${aluno1.retornaIdade(this.ano)}`);

console.log(aluno1);
console.log(aluno1.nome, aluno1.ano);

let aluno2 = new Aluno('Jefferson', 2005, 1.75, true, true, 'All white');

console.log("Primeiro aluno " + aluno1 + "Segundo aluno " + aluno2); // nao foi

// metodos sao acoes de um objeto

