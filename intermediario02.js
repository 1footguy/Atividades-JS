let nota = 3;

if (nota >= 8 && nota <= 10) {
    console.log("Você tirou nota A");    
} else if(nota >= 6 && nota < 8){
    console.log("Você tirou nota B");
} else if(nota >= 4 && nota < 6){
    console.log("Você tirou nota C");
} else if(nota >= 2 && nota < 4){
    console.log("Você tirou nota D");
} else if(nota >= 0 && nota < 2){
    console.log("Você tirou nota F");
} else{
    console.log("Entre com uma nota válida.")
}