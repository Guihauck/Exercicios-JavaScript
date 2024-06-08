let itensLista = [];
let adicionarItens;
let opcoesUsuario;

while (opcoesUsuario != 3) {
  opcoesUsuario = Number(prompt(`
  Olá usuário! Digite o número da opção desejada:

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `));

  switch (opcoesUsuario) {
    case 1:
      adicionarItens = prompt("Digite o item:");
      itensLista.push(adicionarItens);
      break;
    case 2:
      if (itensLista.length == 0) {
        alert("Não existem itens cadastrados!");
        return;
      }
      alert(itensLista);
      break;
    case 3:
      alert("Obrigado por utilizar o programa!");
      break;
    default:
      alert("O caracter digitado é inválido!")
  }

}

