let porcentagem = 1.00 ; // digitar a porcentagem de desconto após o "0." .
let desconto = 1.00 - porcentagem;
let valorprod = 1600;
let valorfinal = valorprod * desconto;

 if(porcentagem >= 0.00 && porcentagem <= 1.00){
    console.log(`O valor do produto com ${porcentagem.toFixed(2)}% de desconto é ${valorfinal}`)
} else{
    console.log("Por favor, entre com uma porcentagem válida.")
}

