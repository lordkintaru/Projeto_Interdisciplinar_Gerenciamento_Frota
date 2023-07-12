document.addEventListener('DOMContentLoaded', function() {
  // Obtém todas as imagens de slide
  const slides = document.querySelectorAll('.slide');

  // Obtém todos os botões de rádio
  const botoesRadio = document.querySelectorAll('[name="btn-radio"]');

  // Obtém todos os labels de navegação manual
  const NavegacaoManual = document.querySelectorAll('.navegacao_Manual label');

  // Percorre os botões de rádio e adiciona um evento de clique a cada um
  botoesRadio.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
      // Remove a classe 'ativo' de todos os labels
      NavegacaoManual.forEach(label => label.classList.remove('ativo'));

      // Adiciona a classe 'ativo' ao label correspondente ao botão de rádio clicado
      NavegacaoManual[indice].classList.add('ativo');

      // Desloca para o slide correspondente
      slides.forEach(slide => slide.style.transform = `translateX(-${indice * 100}%)`);
    });
  });
});





// O código apresentado está envolvido em um evento DOMContentLoaded, que é acionado quando todo o conteúdo do documento HTML é completamente carregado.
//  A primeira linha seleciona todos os elementos que possuem a classe "slide" e os armazena na constante slides.
//   Esses elementos representam as imagens do slide. A segunda linha seleciona todos os elementos que possuem o atributo name igual a "btn-radio" e os armazena na constante botoesRadio. 
//  Esses elementos representam os botões de rádio para a navegação do slide. 
// A terceira linha seleciona todos os elementos label dentro do elemento com a classe "navegacao_Manual" e os armazena na constante labelsNavegacaoManual. 
// Esses elementos representam os labels para a navegação manual do slide.
//  O código, então, percorre todos os botões de rádio utilizando o método forEach e a função de callback é executada para cada botão de rádio.











//  passo:

// 1. O código está envolto em um evento `DOMContentLoaded`, que é acionado quando todo o conteúdo do documento HTML foi completamente carregado.

// 2. A primeira linha `const slides = document.querySelectorAll('.slide');` seleciona todos os elementos com a classe "slide" e os armazena na constante `slides`. Esses elementos representam as imagens de slide.

// 3. A segunda linha `const botoesRadio = document.querySelectorAll('[name="btn-radio"]');` seleciona todos os elementos com o atributo `name` igual a "btn-radio" e os armazena na constante `botoesRadio`. Esses elementos representam os botões de rádio para a navegação do slide.

// 4. A terceira linha `const labelsNavegacaoManual = document.querySelectorAll('.navegacao_Manual label');` seleciona todos os elementos `label` dentro do elemento com a classe "navegacao_Manual" e os armazena na constante `labelsNavegacaoManual`. Esses elementos representam os labels para a navegação manual do slide.

// 5. Em seguida, o código percorre todos os botões de rádio utilizando o método `forEach`:

//    - A função de callback `(botao, indice) => { ... }` é executada para cada botão de rádio. A variável `botao` representa o botão de rádio atual e `indice` representa o índice desse botão na coleção.
   
//    - Dentro dessa função de callback, primeiro removemos a classe 'ativo' de todos os labels de navegação manual usando o método `forEach` e `classList.remove('ativo')`.

//    - Em seguida, adicionamos a classe 'ativo' ao label correspondente ao botão de rádio clicado, acessando-o pelo índice `labelsNavegacaoManual[indice]`, usando `classList.add('ativo')`.

//    - Finalmente, ajustamos a posição dos slides usando o estilo CSS `translateX` para deslocar os slides horizontalmente. Cada slide tem sua posição ajustada de acordo com o índice do botão de rádio clicado: `slides.forEach(slide => slide.style.transform = 'translateX(-${indice * 100}%)');`

