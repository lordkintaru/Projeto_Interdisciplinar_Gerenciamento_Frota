document.addEventListener('DOMContentLoaded', function() {
  // Obtém todas as imagens de slide
  const slides = document.querySelectorAll('.slide');

  // Obtém todos os botões de rádio
  const radioButtons = document.querySelectorAll('[name="btn-radio"]');

  // Obtém todos os labels de navegação manual
  const manualNavLabels = document.querySelectorAll('.navegacao_Manual label');

  // Percorre os botões de rádio e adiciona um evento de clique a cada um
  radioButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Remove a classe 'ativo' de todos os labels
      manualNavLabels.forEach(lbl => lbl.classList.remove('ativo'));

      // Adiciona a classe 'ativo' ao label correspondente ao botão de rádio clicado
      manualNavLabels[index].classList.add('ativo');

      // Desloca para o slide correspondente
      slides.forEach(slide => slide.style.transform = `translateX(-${index * 100}%)`);
    });
  });
});
