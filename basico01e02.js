let num = -10;


if (num === isNaN){
    console.log("Por favor, digite um número");
}
else if(num > 0 && num % 2 === 0){
    console.log(`O número ${num} é um número par positivo.`);
}
else if(num > 0 && num % 2 !== 0){
    console.log(`O número ${num} é um número impar positivo.`);
}else if(num < 0 && num % 2 === 0){
    console.log(`O número ${num} é um número par negativo.`);
}
else if(num === 0){
    console.log(`O número ${num} é nulo.`)
}
else{
    console.log(`O número ${num} é um número impar negativo.`);
}