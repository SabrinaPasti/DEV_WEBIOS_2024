let botao = document.querySelector('button');

let olhaNumero = true

if(olhaNumero == true){
    botao.style.color = 'white';
    botao.style.backgroundColor = 'green';
    botao.style.borderRadius = '5px';
    botao.innerHTML = "Cadastrar"
}else {
    botao.style.color = 'red'
    botao.style.borderRadius = '5px';
    
}

let paragrafo = document.querySelector('#paragrafo');
paragrafo.style.backgroundImage = 'linear-gradient(blue, red)'; 