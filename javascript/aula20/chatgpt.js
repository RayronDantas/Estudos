let valores = []

function adicionar() {
  const num = document.getElementById('numtxt')
  const n1 = Number(num.value)
  const lista = document.getElementById('numlist')

  if (num.value === '') {
    alert('Digite um valor antes de adicionar!')
  } else if (isNaN(n1)) {
    alert('Valor inválido. Por favor, digite um número.')
  } else if (n1 < 1 || n1 > 100) {
    alert('Por favor, digite somente valores de 1 a 100.')
  } else if (valores.includes(n1)) {
    alert('Este valor já foi adicionado. Por favor, digite um número diferente.')
  } else {
    valores.push(n1)

    const item = document.createElement('option')
    item.text = `O número ${n1} foi adicionado`
    lista.appendChild(item)

    // limpa e foca no input
    num.value = ''
    num.focus()
  }
}

function finalizar() {
  if (valores.length === 0) {
    alert('Adicione valores antes de finalizar!')
    return //quando usado sozinho, interrompe a função aqui mesmo
  }

  const res = document.getElementById('res')
  valores.sort((a, b) => a - b)

  const total = valores.length
  const menor = valores[0]
  const maior = valores[valores.length - 1]

  let soma = 0
  for (let valor of valores) {
    soma += valor
  }

  const media = soma / total

  res.innerHTML = `
    <p>Quantidade de valores: ${total}</p>
    <p>Menor valor: ${menor}</p>
    <p>Maior valor: ${maior}</p>
    <p>Soma dos valores: ${soma}</p>
    <p>Média dos valores: ${media.toFixed(2)}</p> 
  `
  //"tofixed(2) mostra apenas 2 casas decimais."
}
