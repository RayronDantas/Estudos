function parimp(b){
    if(b%2 == 0){
        return 'O número é par!'
    }else{
        return 'O número é ímpar!'
    }
}


let res = parimp()
console.log(res)
// alternativa:
//  console.log(parimp(20))