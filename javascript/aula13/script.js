// alert('Tá funcionando!')
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'dia.jpg'
        document.body.style.background = '#d1d189'
    } else if (hora < 18) {
        // Boa tarde!
        img.src = 'tarde.jpg'
        document.body.style.background = '#b38228'
    } else {
        // Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#2d2b2b'
    }
}