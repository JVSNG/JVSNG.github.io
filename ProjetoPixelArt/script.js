let corSelecionada;
function selecionaCor(eventoCor) {
  if (eventoCor.target.classList.contains('color')) {
    corSelecionada = eventoCor.target;
    if (corSelecionada.classList.contains('selected'));
    else {
      document.querySelector('.selected').classList.remove('selected');
      corSelecionada.classList.add('selected');
    }
  }
}

function pintaPixel(eventoPixel) {
  if (eventoPixel.target.classList.contains('pixel')) {
    const pixelSelecionado = eventoPixel.target;
    const cor = window.getComputedStyle(corSelecionada, null).getPropertyValue('background-color');
    pixelSelecionado.style.backgroundColor = cor;
  }
}

function limpaQuadro() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

window.onload = function () {
  corSelecionada = document.querySelector('#black');
  corSelecionada.classList.add('selected');
  const clearButton = document.querySelector('#clear-board');
  document.addEventListener('click', selecionaCor);
  document.addEventListener('click', pintaPixel);
  clearButton.addEventListener('click', limpaQuadro);
};
