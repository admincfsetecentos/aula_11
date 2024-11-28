/**
 * Função que implementa um jogo de adivinhação.
 * 
 * O usuário deve adivinhar um número entre 1 e 10. O script continuará pedindo
 * até que o usuário acerte o número ou digite 'sair' para encerrar o jogo.
 * O script também dá feedback sobre tentativas erradas.
 * 
 * @function
 * @returns {void} Não retorna nenhum valor.
 */
function jogoAdivinhacao() {
    const numeroCorreto = Math.floor(Math.random() * 10) + 1; // Gera o número aleatório entre 1 e 10
    let tentativa;
  
    // Continuar o loop até que o usuário adivinhe ou digite 'sair'
    while (true) {
      tentativa = prompt("Tente adivinhar o número entre 1 e 10 (ou digite 'sair' para sair):");
  
      // Se o usuário digitar 'sair', encerra o jogo
      if (tentativa.toLowerCase() === 'sair') {
        console.log("Você saiu do jogo. Até logo!");
        break;
      }
  
      // Converte a entrada para número e verifica se é válido
      tentativa = parseInt(tentativa, 10);
  
      if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
        console.log("Por favor, insira um número válido entre 1 e 10.");
      } else if (tentativa < numeroCorreto) {
        console.log("O número correto é maior. Tente novamente!");
      } else if (tentativa > numeroCorreto) {
        console.log("O número correto é menor. Tente novamente!");
      } else {
        console.log(`Parabéns! Você acertou o número: ${numeroCorreto}!`);
        break; // Encerra o jogo ao acertar
      }
    }
  }
  
  // Inicia o jogo chamando a função
  jogoAdivinhacao();
  