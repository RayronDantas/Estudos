let num = document.querySelector('input#numtxt')
let lista = document.querySelector('select#numlist')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) { //verificar se o número está na lista. Se o retorno for TRUE é porque o número está na lista. No contrário, FALSE quer dizer que não está na lista. O que desejo receber para a função adicionar() funcionar é um FALSE!
  if (l.indexOf(Number(n)) != -1) { //(l.indexOf(Number(n)) != -1)
    return true
  } else {
    return false
  }
}

function adicionar() {
  if(isNumero(num.value) && !inLista(num.value, valores)) {
    //se o número for entre 0 e 100 e não estiver no vetor "valores", esse bloco é acionado
    valores.push(Number(num.value))

    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    
    res.innerHTML = ''

  } else {
    window.alert('Valor inválido ou já encontrado na lista.')
  }

  num.value = ''
  num.focus()
}

function finalizar() {
  if(valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores) {
      soma += valores[pos]
      if(valores[pos] > maior)
        maior = valores[pos]
      if(valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML += `
    <p>Ao todo, temos ${tot} números cadastrados</p>
    <p>O maior valor informado foi ${maior}.</p>
    <p>O menor valor informado foi ${menor}.</p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores digitados é ${media}.</p>
    `
  }
}