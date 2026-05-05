let nome = " ";
let sobrenome = " ";

while (nome === "" || sobrenome === "") {
    nome = prompt("Digite seu primeiro nome: ");
    sobrenome = prompt("Digite seu sobrenome:");

    if (nome === "" || sobrenome === "") {
        console.log("Preencha corretamente os dois campos!");
    }
}

console.log("Nome completo:", nome, sobrenome);