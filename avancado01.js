let vertices = [ 10, 10, 5]
let ordenacao

if(vertices.length === 3){
    ordenacao = vertices.sort(function(a,b){
        return a - b;
    })
    if(ordenacao[0] + ordenacao[1] > ordenacao[2]){
        console.log("Forma um trigulo")
        if(ordenacao[0] === ordenacao[1] === ordenacao[2]){
            console.log("equilátero")
        }
        if(ordenacao[0] === ordenacao[1] || ordenacao[1] === ordenacao[2] || ordenacao[2] === ordenacao[0]){
            console.log("isósceles")
        }else{
            console.log("escaleno")
        }
    }else{
        console.log("As vertices não formam um triângulo")
    }
}else{
    console.log("Precisa ter pelo menos três vertices para formar um triângulo.")
}
