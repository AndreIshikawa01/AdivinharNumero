let numero;


document.getElementById("btn").onclick = function () {
    numero = Math.floor(Math.random() * 20) + 1;


var number = document.getElementById("inputNumber")
var num = Number(number.value)


if(num === numero){
    document.getElementById("resultado").style.color = "green";
    document.getElementById("resultado").innerHTML = `Você acertou! o número era ${numero}`;
}else if (num >= 21 || num <= 0){
    document.getElementById("resultado").innerHTML= "Número não permitido!"
    document.getElementById("resultado").style.color = "black";
} else{
    document.getElementById("resultado").innerHTML= `Você errou! o número era ${numero}`
    document.getElementById("resultado").style.color = "red";
}
 }

