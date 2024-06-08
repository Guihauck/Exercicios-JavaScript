let listarPacientes = [{
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

let calculoIMC = (peso, altura) => {
  return (peso / (altura/100)**2).toFixed(2);
}

let imcResultPaciente = (paciente) => {
  return `O(A) ${paciente.nome} tem idade ${paciente.idade} e possui IMC: ${calculoIMC(paciente.peso, paciente.altura)}`
}

for (let paciente of listarPacientes) {
  let mensagemResultadoIMC = imcResultPaciente(paciente);
  alert(mensagemResultadoIMC);
}