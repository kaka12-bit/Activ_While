let saldo = 1000; // saldo inicial
let saque = 0;

while (saldo > 0) {
    saque = Number(prompt(`Seu saldo é R$${saldo}. Quanto deseja sacar?`));

    if (saque <= saldo){
        saldo = saldo - saque;
        console.log("Saque realizado. Saldo atual:", saldo);
    } else {
        console.log("Saldo insuficiente! Tente novamente.");
    }
}

console.log("Saldo zerado ou negativo. Operação encerrada.");