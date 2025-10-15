const numInput = document.querySelector('#numtxt');
const lista = document.querySelector('#numlist');
const res = document.querySelector('#res');
const valores = [];

function isNumero(n) {
  return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, lista) {
  return lista.includes(Number(n));
}

function adicionar() {
  const numero = Number(numInput.value);

  if (isNumero(numero) && !inLista(numero, valores)) {
    valores.push(numero);

    const item = document.createElement('option');
    item.text = `Valor ${numero} adicionado.`;
    lista.appendChild(item);

    res.innerHTML = '';
  } else {
    alert('Valor inválido ou já adicionado.');
  }

  numInput.value = '';
  numInput.focus();
}

function finalizar() {
  if (valores.length === 0) {
    alert('Adicione valores antes de finalizar!');
    return;
  }

  const total = valores.length;
  let maior = valores[0];
  let menor = valores[0];
  let soma = 0;

  for (const valor of valores) {
    soma += valor;
    if (valor > maior) maior = valor;
    if (valor < menor) menor = valor;
  }

  const media = soma / total;

  res.innerHTML = `
    <p>Ao todo, temos <strong>${total}</strong> números cadastrados.</p>
    <p>O maior valor informado foi <strong>${maior}</strong>.</p>
    <p>O menor valor informado foi <strong>${menor}</strong>.</p>
    <p>Somando todos os valores, temos <strong>${soma}</strong>.</p>
    <p>A média dos valores digitados é <strong>${media.toFixed(2)}</strong>.</p>
  `;
}
