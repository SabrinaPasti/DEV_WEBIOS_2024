// pegqa os elementos

let valor = document.querySelector('input')
let resultado = document.querySelector('span')

// cria a função
let Calcular = () => {
    let guardaValor = valor.value
    novoSalario = (guardaValor * 1.17) + 215
    resultado.innerHTML = `O novo salário é ${novoSalario}`;
}