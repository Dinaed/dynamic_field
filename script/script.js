const board = document.querySelector('#board');
const SQUARES_COUNT = 810;
for(let i = 0; i<SQUARES_COUNT; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });
  board.append(square);
}

function setColor(element) {
  let color = htmlHex(getRandomIntInclusive(0, 255), getRandomIntInclusive(0, 255), getRandomIntInclusive(0, 255));
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 15px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1D1D1D';
  element.style.boxShadow = '0 0 2px #111111';
}

function getRandomColor() {
  const colors = ['aqua', 'olive', 'yellow', 'lime', 'teal', 'brown', 'cyan', 'mediumpurple', 'white', 'whitesmoke ', 'papayawhip'];
  const index =  Math.floor(Math.random() * colors.length);
  return colors[index];
}

function htmlHex(x, y, z) {
  let hex = '';
  if ((x <= 255 && x >= 0) || (y <= 255 && y >= 0) || (z <= 255 && z >= 0)) {
    x = x < 16 ? '0' + x.toString(16) : x.toString(16);
    y = y < 16 ? '0' + y.toString(16) : y.toString(16);
    z = z < 16 ? '0' + z.toString(16) : z.toString(16);
  }
  return (hex +='#' + x + y + z);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
