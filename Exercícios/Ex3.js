const nome = prompt("Aluno, digite o seu nome");
let nota1 = Number(prompt("Digite a sua primeira nota:"));
let nota2 = Number(prompt("Digite a sua segunda nota:"));
let nota3 = Number(prompt("Digite a sua terceira nota:"));
let nota4 = Number(prompt("Digite a sua quarta nota:"));

let resultadoMedia = ((nota1+nota2+nota3+nota4)/4).toFixed(2);

switch (true) {
case (resultadoMedia >= 7):
  alert(`Parabéns ${nome} você passou a média ${resultadoMedia}`);
  break
case (resultadoMedia >= 6 || resultadoMedia == 6.5):
  alert(`Aluno ${nome} você está em recuperação, pois a sua nota foi de: ${resultadoMedia}`);
  break
case(resultadoMedia < 6):
  alert(`Aluno ${nome} você está reprovado, pois a sua nota foi de: ${resultadoMedia}`);
  default:
    break
}