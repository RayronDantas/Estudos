let valores = []
function adicionar() {
  const num = document.getElementById('numtxt')
  const n1 = Number(num.value)
  const lista = document.getElementById('numlist')

  if (isNaN(n1) ) {
    window.alert('Por favor, digite somente valores de 1 a 100.')
  } else if (valores.includes(n1)) {
    window.alert('Este valor já foi adicionado. Por favor, digite um número diferente.')
  } else if(n1<1 || n1>100){
    window.alert('Digite um valor antes de adicionar!')
  }else {
    valores.push(n1)

    let item = document.createElement('option')
    item.text = `O número ${n1} foi adicionado`
    lista.appendChild(item)

  }
}

function finalizar() { 
  if (valores.length === 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {
  
  let res = document.getElementById('res')
  // valores.sort(((a, b) => a - b))
  /*passa essa função de comparação dentro do sort para ordenar os valores de forma crescente. O sort() por padrão ordena por string, então para ele "10" seria menor que "2" por exemplo, pois "1<2" e "0<2". */
  
  //ex: 2, 10, 5, 3   1º: 2, 2, 2 ; 2º: 10, 2, 12; 3º: 10, 2, 17; 4º: 10, 2, 20  Maior, menor e soma respectivamente
  let total = valores.length
  let maior = valores[0]
  let menor = valores[0]
  let soma = 0;
  for(const valor of valores){
    soma += valor
    if(valor > maior) maior = valor
    if(valor < menor) menor = valor
  }
    
  let media = soma/valores.length

  res.innerHTML = `<p>A quantidade de valores é: ${total}.</p>`
  res.innerHTML += `<p>O menor valor digitado foi: ${valores[0]}.</p>`
  res.innerHTML += `<p>O maior valor digitado foi: ${valores[valores.length - 1]}.</p>`
  res.innerHTML += `<p>A soma dos valores digitado foi: ${soma}.</p>`
  res.innerHTML += `<p>A média dos valores digitado foi: ${media}.</p>`
  }
}