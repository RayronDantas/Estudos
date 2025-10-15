function verificar(){
    var data = new Date() //cria a variável que armazena a data
    var ano = data.getFullYear() //pega o ano atual (2025)
    var fano = document.getElementById('txtano') //pega a idade digitada no input
    var res = document.getElementById('res') //armazena a variável onde sera exibida a resposta
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //define o id de 'img' como 'foto'
        if (fsex[0].checked) { //se o primeiro input radio estiver selecionado, é homem (pois no html o primeiro está para masculino)
            gen = 'Homem'
            if (idade >= 0 && idade < 12){
                //criança (0 a 11)
                img.setAttribute('src', 'bebe-h.jpg')
            } else if (idade < 21) {
                //jovem (12 a 20)
                img.setAttribute('src','jovem-h.jpg')
            } else if (idade <51) {
                //adulto (21 a 50)
                img.setAttribute('src','adulto-h.jpg')
            } else {
                // idoso
                img.setAttribute('src','idoso-h.jpg')
            }

        } else if (fsex[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade < 12){
                //criança (0 a 11)
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21) {
                //jovem (12 a 20)
                img.setAttribute('src','jovem-m.jpg')
            } else if (idade <51) {
                //adulto (21 a 50)
                img.setAttribute('src','adulto-m.jpg')
            } else {
                // idoso
                img.setAttribute('src','idoso-m.jpg')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos: ${gen} com ${idade} anos.`
        res.appendChild(img) //"appendChild" vai fazer a variável 'img' criada aparecer dentro da div 'res', portanto, como uma filha 
    }
}