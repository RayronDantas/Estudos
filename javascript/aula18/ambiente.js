var num = [5, 4, 8, 2, 3, 1]
num.push(7)
num.sort()
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O número ${num[pos]} está na posição ${pos}`)
    console.log(`Observe: ${num}`)
}

/* for(let pos=0; pos<num.length; pos++){
    // num.sort()
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

/* for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

