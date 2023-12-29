let num1 = 5;
let num2 = 5;
let operador = "/";

switch (operador){
    case "*":
        console.log(`O resultado da multiplicação entre ${num1} e ${num2} é`, num1 * num2);
        break;
    case "/":
        console.log(`O resultado da divisão entre ${num1} e ${num2} é`, num1 / num2);
        break;
    case "+":
        console.log(`O resultado da adição entre ${num1} e ${num2} é`, num1 + num2);
        break;
    case "-":
        console.log(`O resultado da subtração entre ${num1} e ${num2} é`, num1 - num2);
        break;
    default:
        console.log('Digite um operador válido.');
        break;
}