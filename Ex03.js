// 1. Capturar Entrada
// O prompt captura o nome digitado pelo usuário.
const nomeCavaleiro = prompt("Qual é o seu nome de Cavaleiro?");

// 2. Avaliação Ternária
// Verifica se o valor é "True" (se o usuário digitou algo) ou "False" (se deixou vazio ou cancelou).
const acesso = nomeCavaleiro ? "Permitido" : "Negado";

// 3. Exibir Resultado
// Exibe o alerta com o status do acesso.
alert("Acesso " + acesso);
