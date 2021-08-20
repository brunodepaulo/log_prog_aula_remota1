const listaDePecas = ["Ar Condicionado", "Suspensao", "Motor"];

console.log(listaDePecas);

/* Mensagem de Verificacao de cadastro de pecas */
if (listaDePecas.length < 3) {
    console.log("E possivel cadastrar mais pecas.");
} else {
    console.log("Nao ha mais espaco na lista.");
}

/*Pecas com mais de 100g gramas nao passa */
var peso = 100;

if (peso > 100) {
    console.log("Peso da peca adequado.");
} else {
    console.log("Peso insuficiente.");
}

/* Verificacao da quantidade de caracteres das pecas em if */
let nomePeca = "Disco";

if (nomePeca.length > 3) {
    console.log("Nome adequado.");
} else if (nomePeca.length == 0) {
    console.log("Nome nao pode ser vazio.");
} else {
    console.log("Peca precisa mais de 3 letras.");
}

/* Verificacao da quantidade de caracteres das pecas em if */
switch (nomePeca.length) {
    case 0:
        console.log("Nome nao pode ser vazio.");
        break;
    case 1:
    case 2:
    case 3:
        console.log("Peca precisa mais de 3 letras.");
        break;
    default:
        console.log("Nome adequado.");
        break;
}