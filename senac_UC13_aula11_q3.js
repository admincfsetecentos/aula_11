/**
 * Função que calcula e exibe a média das notas de cada aluno.
 * 
 * Esta função armazena os dados de três alunos, onde cada aluno possui um array de suas notas.
 * Utiliza-se de loops aninhados para calcular a média de cada aluno e exibir o nome e a média no console.
 * 
 * @function
 * @returns {void} Não retorna nenhum valor.
 */
function calcularMediaAlunos() {
    // Array de objetos de alunos, cada um com o nome e um array de notas
    let alunos = [
      { nome: "João", notas: [6, 7, 8] },
      { nome: "Maria", notas: [8, 9, 7] },
      { nome: "Carlos", notas: [10, 9, 8] }
    ];
  
    // Loop principal para percorrer os alunos
    for (let aluno of alunos) {
      let soma = 0;
  
      // Loop interno para somar as notas de cada aluno
      for (let nota of aluno.notas) {
        soma += nota;
      }
  
      // Calcula a média das notas
      let media = soma / aluno.notas.length;
  
      // Exibe o nome do aluno e sua média no console
      console.log(`${aluno.nome} - Média: ${media.toFixed(2)}`);
    }
  }
  
  // Chama a função para calcular as médias dos alunos
  calcularMediaAlunos();
  