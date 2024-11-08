///Array

let frutas = ["maça", "banana", "pera", "uva", "melao", "melancia", "goiaba", "limao"]

for( i =0; i <= frutas.length; i++){
    console.log(i)
}

frutas.forEach(Percorrer)

function Percorrer(valor, indice){
    console.log(valor);
    console.log(indice);
}