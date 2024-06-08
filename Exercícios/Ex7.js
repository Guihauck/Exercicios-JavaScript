let listaPacientes = [{
  nome: 'Guilherme Jorge Hauck',
  altura: 175,
  idade: 25,
  peso: 80
},
{
  nome: 'Jorge Vieira Hauck',
  altura: 165,
  idade: 17,
  peso: 75
},
{
  nome: 'Elias Jorge Vieira Hauck',
  altura: 174,
  idade: 16,
  peso: 56
},
{
  nome: 'Maria Aparecida Vieira dos Santos',
  altura: 164,
  idade: 16,
  peso: 57
}]

let detalhesPacientes = [];

for (let pacientes of listaPacientes) {
  detalhesPacientes.push(`O ${pacientes.nome} tem ${pacientes.idade} de idade e pesa ${pacientes.peso}`)
}

alert(detalhesPacientes);