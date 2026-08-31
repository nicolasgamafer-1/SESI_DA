
const campo1 = document.getElementById("campo1");
const campo2 = document.getElementById("campo2");

const campo3 = document.getElementById("campo3");
const campo4 = document.getElementById("campo4");

const campo5 = document.getElementById("campo5");
const campo6 = document.getElementById("campo6");

const campo7 = document.getElementById("campo7");
const campo8 = document.getElementById("campo8");

const resultado1 = document.getElementsByTagName("h1")[0];
const resultado2 = document.getElementsByTagName("h1")[1];
const resultado3 = document.getElementsByTagName("h1")[2];
const resultado4 = document.getElementsByTagName("h1")[3];

function mais() {
    var soma = Number(campo1.value) + Number(campo2.value);
    resultado1.innerHTML = "Resultado: " + soma;
}

function menos() {
    var subtracao = Number(campo3.value) - Number(campo4.value);
    resultado2.innerHTML = "Resultado2: " + subtracao; 
}

function dividir() {
    var divisor = Number(campo6.value);
    var divisao = Number(campo5.value) / divisor;
    resultado3.innerHTML = "Resultado3: " + divisao; 
}

function veses() {
    var multiplicacao = Number(campo7.value) * Number(campo8.value);
    resultado4.innerHTML = "Resultado4: " + multiplicacao; 
}