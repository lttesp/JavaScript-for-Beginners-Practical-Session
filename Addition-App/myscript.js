var number1;
var number2;

number1 = math.floor((math.random() * 10) + 1);
number2 = math.floor((math.random() * 10) + 1);

document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

var answer = number1 + number2;
var checkanswer = document.querySelector('input[type=text]');
var value = checkanswer.value;
// TODO
// [] Need to add more functionality
// [] Better UI