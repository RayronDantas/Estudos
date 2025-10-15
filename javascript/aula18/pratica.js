let num = [7,2,3,8,5,4,7,7,10,1]
let numeroProcurado = 7
let posicao = []

num.forEach((elemento, indice) =>{
    if(elemento === numeroProcurado){
        posicao.push(indice)
    }
});

console.log(posicao)