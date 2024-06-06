listarItens = [];

for (itens = 0; itens <5; itens++) {
let cadastreItens = prompt(`Digite o item: ${itens+1}`);
listarItens[itens] = cadastreItens;
}

alert(listarItens);