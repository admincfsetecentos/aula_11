/**
 * Função que gerencia a lista de tarefas.
 * 
 * Esta função cria uma lista de tarefas, adiciona três tarefas à lista, 
 * remove a última tarefa e exibe o resultado final no console.
 * 
 * @function
 * @returns {void} Não retorna nenhum valor.
 */
function gerenciarTarefas() {
    // Inicializa o array vazio para armazenar as tarefas
    let tarefas = [];
  
    // Adiciona três tarefas à lista
    tarefas.push("Estudar JavaScript");
    tarefas.push("Ler livro de programação");
    tarefas.push("Praticar código");
  
    // Remove a última tarefa da lista
    tarefas.pop();
  
    // Exibe o array de tarefas restantes no console
    console.log(tarefas);
  }
  
  // Chama a função para executar o gerenciamento das tarefas
  gerenciarTarefas();
  