document.body.style.backgroundColor = "Black" // Colocando cor no elemento body
document.title = "Esse é o DOM" // Alterando valor
document.documentElement.lang = "pt-br" //  altera o elemento html lang

//Criação de elementos
let campoNovo = document.createElement('button');

// passar aonde queremos esse elemento // add texto nesse elemento
document.body.appendChild(campoNovo).innerHTML = "Enviar";

// aplicando css no elemento
campoNovo.style.backgroundColor = "red"
campoNovo.style.borderRadius = "50px"
campoNovo.style.color = "White"
campoNovo.style.padding = "20px"
campoNovo.style.fontSize = "20px"




