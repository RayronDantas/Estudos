var hora = 12
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12){ 
    console.log('Bom dia!') //valores de 11 pra baixo
} else if (hora <= 18){
    console.log('Boa tarde!') //valores de 12 até 18
} else {
    console.log('Boa noite!') //valores de 19 para cima
}