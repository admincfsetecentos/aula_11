# QUESTÃO 1

# O que foi pedido:

A questão solicita a criação de um "script" para gerenciar uma lista de tarefas com as seguintes funcionalidades:

Criar um "array" vazio chamado "tarefas".
Adicionar três tarefas a esse "array" utilizando o método ".push()".
Remover a última tarefa adicionada com o método ".pop()".
Exibir o conteúdo final do "array" no console.

# O que foi entregue:

A função "gerenciarTarefas()" foi criada para atender a todos os requisitos do enunciado. O fluxo de execução foi o seguinte:

# Inicialização do "array" "tarefas":

A função começa criando um "array" vazio chamado "tarefas".

# Adição de três tarefas:

Três tarefas foram adicionadas ao array utilizando o método .push().

# Remoção da última tarefa:

O método ".pop()" foi usado para remover a última tarefa da lista.

# Exibição do resultado final:

O "array" resultante, após a remoção da última tarefa, é impresso no console com "console.log(tarefas)".

# JSDoc da primeira questão:

```/**
 * Função para gerenciar uma lista de tarefas.
 * 
 * Esta função cria uma lista de tarefas, adiciona três tarefas, 
 * remove a última tarefa e exibe o resultado final no console.
 * 
 * @function
 * @returns {void} Não retorna nenhum valor.
 */
 ```


# QUESTÃO 2

# O que foi pedido:

A questão pede que seja criado um "script" para gerenciar um estoque de itens, com os seguintes requisitos:

Criar um "array" chamado estoque com quatro itens iniciais.
Atualizar o segundo item do "array".
Exibir a quantidade total de itens no estoque usando a propriedade ".length".

# O que foi entregue:

A função "gerenciarEstoque()" foi criada para atender ao pedido da questão. O funcionamento é o seguinte:

# Criação do "array" "estoque":

A função começa criando um "array" chamado estoque com os itens iniciais: "Arroz", "Feijão", "Açúcar", "Sal".

# Alteração do segundo item:

O segundo item do "array" ("estoque[1]") foi atualizado de "Feijão" para "Macarrão".

# Exibição do número total de itens:

O número total de itens no "array" é obtido usando a propriedade ".length" e é exibido no console com "console.log()".

# JSDoc da segunda questão:

```/**
 * Função que gerencia um estoque de itens.
 * 
 * Esta função inicializa um estoque com 4 itens, atualiza o segundo item no array 
 * e exibe a quantidade total de itens presentes no estoque.
 * 
 * @function
 * @returns {void} A função não retorna nenhum valor.
 */
```

# QUESTÃO 3

# O que foi pedido:

A questão consiste em criar um "script" para calcular a média das notas de três alunos. O código demanda o seguinte:

Criar um "array" alunos onde cada aluno é representado por um objeto com o nome e um "array" de notas.
Utilizar loops aninhados para calcular a média das notas de cada aluno.
Exibir o nome de cada aluno e sua média.

# O que foi entregue:

A função "calcularMediaAlunos()" foi criada para calcular e exibir as médias de três alunos. O processo é o seguinte:

# Criação do array de alunos:

O "array" "alunos" foi inicializado com três objetos, onde cada objeto representa um aluno com seu nome e um "array" de notas.

# Cálculo da média das notas:

A função percorre o array alunos com um "loop" "for...of". Dentro desse "loop", um outro "loop" "for...of" é utilizado para somar as notas de cada aluno.

# Exibição do nome e média do aluno:

Após calcular a média, ela é exibida no console junto com o nome do aluno, utilizando o método ".toFixed(2)", com o fito de exibi-la junto à duas casas decimais.

# JSDoc da terceira questão: 

```/**
 * Função que calcula e exibe a média das notas de cada aluno.
 * 
 * Esta função armazena os dados de três alunos, onde cada aluno possui um array de suas notas.
 * Utiliza-se de loops aninhados para calcular a média de cada aluno e exibir o nome e a média no console.
 * 
 * @function
 * @returns {void} Não retorna nenhum valor.
 */
```

# QUESTÃO 4

# O que foi pedido:

A tarefa consiste em criar um "script" que leia um "array" de palavras e exiba cada palavra no console em ordem reversa. O "script" deve:

Criar um array de palavras com pelo menos 5 palavras.
Usar um loop reverso para exibir as palavras no console.

# O que foi feito:

A função "exibirPalavrasReverso()" foi criada para exibir as palavras de um "array" em ordem reversa. A solução agora utiliza o método ".reverse()" para inverter o "array" e o método ".forEach()" para exibir as palavras de forma simples e direta.

# Criação do "array" de "palavras":

O "array" "palavras" foi inicializado com 5 palavras.

# Reversão do "array":

O método ".reverse()" foi utilizado para inverter o "array" de palavras de forma simples e eficiente.

# Exibição das palavras:

Após inverter o "array", utilizou-se ".forEach()" para percorrer as palavras e exibi-las no console.

# JSDoc da quarta questão:

```/**
 * Função que exibe as palavras de um array em ordem reversa.
 * 
 * Esta função recebe um array de palavras e exibe cada palavra no console,
 * começando da última até a primeira, utilizando um loop `for` reverso.
 * 
 * @function
 * @param {Array<string>} palavras - Um array contendo as palavras a serem exibidas em ordem reversa.
 * @returns {void} Não retorna nenhum valor.
 */
```

# QUESTÃO 5

# O que foi pedido:

A questão consiste em criar um "script" que pede ao usuário para adivinhar um número entre 1 e 10. O "script" deve:

Continuar pedindo números até que o usuário adivinhe o número correto.
Parar imediatamente se o usuário digitar "sair".
Exibir mensagens de "feedback" sobre respostas corretas ou quando o usuário decidir sair.

# O que foi entregue:

A função "jogoAdivinhacao()" foi implementada para permitir ao usuário adivinhar um número entre 1 e 10. O código utiliza um "loop" "while (true)" que continua até que o número seja adivinhado ou o usuário decida sair do jogo.

# Geração de número aleatório:

O número correto é gerado aleatoriamente entre 1 e 10 utilizando "Math.random()".

# "Loop" de tentativa:

O "loop" continua até que o usuário digite o número correto ou escolha sair. Durante o "loop", a entrada do usuário é verificada para garantir que seja válida.

# Exibição de mensagens:

O "script" exibe mensagens informando se o número é maior ou menor do que o correto, ou parabeniza o usuário quando ele acerta.

# JSDoc da quinta questão:

JS 5:

```/**
 * Função que implementa um jogo de adivinhação.
 * 
 * O usuário deve adivinhar um número entre 1 e 10. O script continuará pedindo
 * até que o usuário acerte o número ou digite 'sair' para encerrar o jogo.
 * O script também dá feedback sobre tentativas erradas.
 * 
 * @function
 * @returns {void} Não retorna nenhum valor.
 */
```

