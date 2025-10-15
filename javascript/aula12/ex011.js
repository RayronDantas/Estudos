var idade = 70
console.log(`Você tem ${idade} anos.`)
if (idade < 16){ 
    console.log('Não vota')
} else if ( idade < 18 || idade > 66){
// se acionou esse bloco, a idade é maior que 16, portanto é obrigatório o voto
    console.log('Voto opcional')
} else { //se esse bloco foi acionado, a idade está entre 18 a 66 (voto obrigatório)
    console.log('Voto obrigatório')
}

// condições: entre 18 e 66 anos o voto é obrigatório, a partir de 16 anos até 17 é opcional e a partir de 67 anos é opcional também