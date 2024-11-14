// vamos desenvolver uma tabuada

//Pega um elemento no html utilizando o ID
let valor = document.getElementById('recebeValor');

//Pega o elemento no html utilizando o atributo name
let resultado = document.getElementById('resultado');


const Tabuada = () => {
    // guardar o valor que está sendo digitado dentro da variavel
    let guardaValor = valor.value;

    if(guardaValor == ''){
        resultado.innerHTML = "Insira um valor válido"
        resultado.style.color = "red";

    } else{
        resultado.innerHTML = " ";
        resultado.style.color = "Black";
        
        for( i = 0; i <= 10; i++){
            // console.log(`O valor de ${guardaValor} x ${i} é igual a ${guardaValor * i}`);
            let resultadoTabuada = guardaValor * i;
    
            resultado.innerHTML += `${guardaValor} x ${i} = ${guardaValor * i} <br>`
        }
    }

    
  
}

// limpar os campos
const Limpar = () => {
    resultado.innerHTML = " ";
    valor.value = " ";
}