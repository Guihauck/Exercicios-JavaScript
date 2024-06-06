let digiteNumero = prompt("Usuário adivinhe o número que penso:");
let numeroSoteio = Math.ceil(Math.random(digiteNumero) * 10);

let numeroChances = 1;

while (digiteNumero != numeroSoteio) {
  digiteNumero = prompt(`Você errou! número apresentado por você: ${digiteNumero} número sorteado: ${numeroSoteio}`);
  numeroChances++
}

switch (true) {
  case (numeroChances > 1):
    alert(`Parabéns você adivinhou o número sorteado: ${numeroSoteio} com ${numeroChances} tentativas!`);
    break;
  default:
    alert(`Parabéns você adivinhou o número sorteado: ${numeroSoteio} com ${numeroChances} tentativa!`);
    break
}