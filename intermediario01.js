let idade = 20;


if (idade === isNaN){
    console.log("Por favor, digite um número");
}
else if(idade > 0 && idade <= 12){
    console.log(`Você tem ${idade} ano(s) e é considerado uma criança.`);
}
else if(idade > 12 && idade < 18){
    console.log(`Você tem ${idade} ano(s) e é considerado um adolescente.`);
}
else if(idade >= 18 && idade < 60){
    console.log(`Você tem ${idade} ano(s) e é considerado um adulto.`);
}
else if(idade > 60 && idade <= 130){
    console.log(`Você tem ${idade} ano(s) e é considerado um idoso.`);
}
else{
    console.log("Entre com uma idade válida.");
}