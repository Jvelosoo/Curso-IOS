// main.js

// Função para ler uma entrada do console
function lerEntrada(mensagem) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    readline.question(mensagem, (entrada) => {
      resolve(entrada);
      readline.close();
    });
  });
}

// Função para calcular a média das notas
function calcularMedia(notas) {
  const total = notas.reduce((soma, nota) => soma + nota, 0);
  return total / notas.length;
}

// Função principal assíncrona
async function main() {
  const notas = [];

  for (let i = 1; i <= 4; i++) {
    const nota = await lerEntrada(`Digite a nota ${i}: `);
    notas.push(parseFloat(nota));
  }

  const media = calcularMedia(notas);
  console.log(`A média do aluno com as 4 notas é: ${media}`);
}

// Chamar a função principal
main();
