//  O que é uma variável? Um espaço na memória do computador aonde é guardado alguma informação
// Não podemos utilizar, númerose e caractere especial. Deve-se começar com um underline ou alguma letra.
// Quando eu quero criar uma variável preciso inserir antes do nome dessa variável as palavras reservadas: var/let/const

// Tipos de Variáveis 

// Var: Espaço de tipo variável. Pode ser numérica ou de texto. Pode redeclarar.
// Const: Valor constante não pode ser mudado. O primeiro valor dado é o único.
// Let: não podem ser redeclaradas, ou seja, você não pode declarar novamente uma variável com o mesmo nome. 
// sinal de = é de atribuição

var nomeAluno = ('Sabrina');
console.log(nomeAluno);

var nomeAluno = 0;
console.log(nomeAluno);

var teste = 0/0;
console.log(teste)

var musica = ('Presentemente eu posso me considerar um sujeito de sorte, porque apesar de muito moço, me sinto são, salvo e forte e tenho comigo pensado "Deus é brasileiro e anda do meu lado" E assim já não posso sofrer no ano passado')
console.log(musica)


var nomeAluno2 = "Lukas";
var nomeAluno3 = " com K";
console.log(nomeAluno2 + nomeAluno3); //concatenação

var verdadeira = true;
var falsa = false;

var nulo = null; // não possui valor significativo
var indefinido = undefined;

console.log()