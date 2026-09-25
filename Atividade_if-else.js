// Exercício 1 - Classficação de Temperatura

let temperatura = 30;

if (temperatura < 15) {
    console.log("Muito Frio");
    
} else if (temperatura < 20) {
    console.log("Frio");
    
} else if (temperatura < 28) 
    console.log("Agradável");

 else  (temperatura < 30) 
    console.log("Muito quente");
//================================================
// Exercício 2 - Nota e Conceito

let nota = 7;

if (nota > 9) {
    console.log("Conceito A");
    
} else if (nota > 7) {
    console.log("Conceito B");
    
} else if (nota > 5) {
    console.log("Conceito C");
    
} else (nota < 5) 
    console.log("Conceito D");
//================================================
// Exercício 3 - Dia da Semana

let dia = 3; 

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}
//================================================
// Desafio - Calculadora de IMC

let peso = 70; 
let altura = 1.75; 

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obeso");
}

    
