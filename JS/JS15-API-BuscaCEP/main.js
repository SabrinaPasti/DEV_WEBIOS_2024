let URL = "https://viacep.com.br/ws/01001000/json/"
let cep = document.getElementById('campoCep');
let logradouro = document.getElementById('campoLogradouro');
let complemento = document.getElementById('campoComplemento');
let bairro = document.getElementById('campoBairro');
let estado = document.getElementById('campoEstado');


async function BuscaCep(){
    // Pegando elemento no html e passando o valor que o usuário deseja
    let campoUsuario = document.getElementById("campoUsuario").value
    let URL = `https://viacep.com.br/ws/${campoUsuario}/json/`

    let resp = await fetch(URL).then((response) => {
        // Transformar json em obj

        return response.json();
    }).then((response) => {
        cep.value = response.cep
        logradouro.value = response.logradouro
        complemento.value = response.complemento
        bairro.value = response.bairro
        estado.value = response.estado

    })

    let exemplo = resp.json();
    console.log(exemplo);
}

BuscaCep();
