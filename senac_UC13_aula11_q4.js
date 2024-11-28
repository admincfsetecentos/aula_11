/**
 * Função que exibe as palavras de um array em ordem reversa.
 * 
 * Esta função recebe um array de palavras e exibe cada palavra no console,
 * começando da última até a primeira, utilizando um loop `for` reverso.
 * 
 * @function
 * @param {Array<string>} palavras - Um array contendo as palavras a serem exibidas em ordem reversa.
 * @returns {void} Não retorna nenhum valor.
 */
function exibirPalavrasReverso(palavras) {
    // Utiliza o método forEach para percorrer as palavras de trás para frente
    palavras.reverse().forEach(palavra => console.log(palavra));
  }
  
  // Chama a função passando o array de palavras
  exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
  