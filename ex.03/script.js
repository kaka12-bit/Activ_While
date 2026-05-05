let total = 0;
let valor = -1;

while (valor !== 0) {
    valor = Number(prompt("Digite o valor da compra (0 para finalizar):"));

    if (valor !== 0) {
        total = total + total;
    }
}

console.log("Total da compra: R$", total);