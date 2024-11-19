let url = "https://dog.ceo/api/breeds/image/random";

const dogApi = async () =>{
    // faço a consulta na api e retorno o json na variavel resp
    let resp = await fetch(url) //pede para a url alguma coisa // consulta e valida as informações na url // resp vem em json

    // transformar o retorno em json em objeto

    let exemplo = resp.json();
    console.log(exemplo);
}

dogApi();


