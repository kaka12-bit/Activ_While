let soma = 0;
let quantidade = 0;
let nota = 0;

while(nota >= 0) {
    nota = Number(prompt("Digite uma nota (negativo para sair):"));

    if(nota >= 0) {
        soma = soma + nota;
        quantidade = quantidade + 1;
    }
}

if(quantidade >0) {
    let media = soma / quantidade;
    console.log("Média das notas:" , media);
} else{
    console.log("Nenhuma nota válida foi insirida.");
}