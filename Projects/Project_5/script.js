const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', (e) => {
  let pressedKey = e.key.toUpperCase();

  // Handle special key text
  if (pressedKey === ' ') pressedKey = 'SPACE';
  if (pressedKey === 'ESCAPE') pressedKey = 'ESC';
  if (pressedKey === 'CONTROL') pressedKey = 'CTRL';
  if (pressedKey === 'META') pressedKey = 'WIN';
  if (pressedKey === 'ALTGRAPH') pressedKey = 'ALT';
  if (pressedKey === 'CAPSLOCK') pressedKey = 'CAPSLOCK';
  if (pressedKey === 'ARROWUP') pressedKey = '↑';
  if (pressedKey === 'ARROWDOWN') pressedKey = '↓';
  if (pressedKey === 'ARROWLEFT') pressedKey = '←';
  if (pressedKey === 'ARROWRIGHT') pressedKey = '→';

  keys.forEach((key) => {
    if (key.textContent.toUpperCase() === pressedKey) {
      key.classList.add('active');
    }
  });
});


