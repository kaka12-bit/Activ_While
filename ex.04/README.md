# Activ_While

📘 Validação de Nome e Sobrenome em JavaScript
📋 Descrição

Este programa em JavaScript solicita que o usuário digite seu primeiro nome e sobrenome. Ele garante que ambos os campos sejam preenchidos corretamente antes de continuar a execução.

⚙️ Como funciona
O programa utiliza duas variáveis para armazenar o nome e o sobrenome.
Um loop while é executado enquanto algum dos campos estiver vazio.
Durante cada repetição:
O usuário é solicitado a digitar o primeiro nome
Em seguida, o sobrenome
Caso algum dos campos seja deixado em branco:
Uma mensagem de erro é exibida no console
O programa repete a solicitação
Quando ambos os campos são preenchidos corretamente:
O loop é encerrado
O nome completo é exibido no console

🧠 Conceitos utilizados
Loop while
Mantém o programa em execução até que uma condição seja atendida.
Operadores lógicos (||)
Utilizado para verificar se pelo menos um dos campos está vazio.
Validação de entrada
Garante que o usuário preencha corretamente os dados obrigatórios.
Entrada de dados
Coleta informações digitadas pelo usuário durante a execução.
Saída de dados (console.log)
Exibe mensagens e resultados no console.

🚨 Possíveis melhorias
Remover espaços em branco antes da validação (usar trim())
Validar se o usuário digitou apenas letras
Melhorar as mensagens de erro para orientar melhor o usuário
Criar uma interface visual com formulário (HTML/CSS)

📌 Exemplo de execução
Usuário deixa nome vazio → mensagem de erro
Usuário preenche apenas o nome → mensagem de erro
Usuário preenche nome e sobrenome → programa aceita

Resultado exibido: nome completo do usuário

🎯 Objetivo do exercício

Este exercício ajuda a desenvolver:

Lógica de validação de dados
Uso de estruturas de repetição
Manipulação de entrada do usuário
Boas práticas de verificação de dados