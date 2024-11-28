/**
 * Função que gerencia um estoque de itens.
 * 
 * Esta função inicializa um estoque com 4 itens, atualiza o segundo item no array 
 * e exibe a quantidade total de itens presentes no estoque.
 * 
 * @function
 * @returns {void} A função não retorna nenhum valor.
 */
function gerenciarEstoque() {
    // Inicializa o array estoque com 4 itens
    let estoque = ["Arroz", "Feijão", "Açúcar", "Sal"];
  
    // Atualiza o segundo item do estoque
    estoque[1] = "Macarrão";
  
    // Exibe o total de itens no estoque
    console.log("Quantidade total de itens no estoque:", estoque.length);
  }
  
  // Chama a função para realizar o gerenciamento do estoque
  gerenciarEstoque();
  