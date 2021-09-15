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

function geraQuadro(tamanho) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.style.gridTemplateColumns = 'repeat(' + tamanho + ', 40px)';
  pixelBoard.style.gridTemplateRows = 'repeat(' + tamanho + ', 40px)';
  let numeroDePixels = parseInt(tamanho);
  numeroDePixels *= numeroDePixels;
  let ultimoPixel = pixelBoard.lastElementChild;
  while (ultimoPixel) {
    pixelBoard.removeChild(ultimoPixel);
    ultimoPixel = pixelBoard.lastElementChild;
  }
  for (let index = 0; index < numeroDePixels; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

function checaValorTamanho() {
  let valorInput = document.querySelector('#board-size').value;
  const tamanho = parseInt(valorInput);
  if (tamanho > 50) {
    valorInput = '50';
  } else if (tamanho < 5) {
    valorInput = '5';
  }
  if (valorInput == '') {
    alert('Board inválido!');
  } else {
    geraQuadro(valorInput);
  }
}

function gerarCores() {
  let cores = document.querySelector('#color-palette').children;
  for (let index = 2; index < cores.length; index += 1){  
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    cores[index].style.backgroundColor = '#' + randomColor;
  }
}

window.onload = function () {
  geraQuadro('5');
  gerarCores();
  corSelecionada = document.querySelector('#black');
  corSelecionada.classList.add('selected');
  const clearButton = document.querySelector('#clear-board');
  const generateButton = document.querySelector('#generate-board');
  const generateColorButton = document.querySelector('#generate-color');
  document.addEventListener('click', selecionaCor);
  document.addEventListener('click', pintaPixel);
  clearButton.addEventListener('click', limpaQuadro);
  generateButton.addEventListener('click', checaValorTamanho);
  generateColorButton.addEventListener('click', gerarCores);
};
