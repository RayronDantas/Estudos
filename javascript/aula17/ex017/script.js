// window.alert('oi')
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.lenght == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n1 = Number(num.value)
        tab.innerHTML = ''
        for(let c=1; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}

