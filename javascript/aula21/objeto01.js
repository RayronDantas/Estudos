let amigo = {
  nome:'José',
  sexo:'M',
  peso: 75.5,
  engordar(p=0){
    this.peso += p
  }
}

amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)

