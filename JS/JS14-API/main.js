let url = "https://dog.ceo/api/breeds/image/random";

const dogApi = async () =>{
    // // faço a consulta na api e retorno o json na variavel resp
    // let resp = await fetch(url) //pede para a url alguma coisa // consulta e valida as informações na url // resp vem em json

    // // transformar o retorno em json em objeto

    // let exemplo = resp.json();
    // console.log(exemplo);

    await fetch(url).then((response) => {

        // Transforma o json recebido pelo fetch em obj
        return response.json();
    }).then((response) =>{
        // Apresentar as informações para o usuário 

        document.getElementById('mostraJson').innerText = JSON.stringify(response);
        let = image = `<img src="${response.message}" style="width: 200px" alt="">` 
        
        document.getElementById('mostraIMG').innerHTML = image;
    })

}

// dogApi();


