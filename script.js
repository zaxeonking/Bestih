const container = document.querySelector('.container');

for (let i = 0; i < 30; i++) {
  const elem = document.createElement('div');
  elem.className = Math.random() > 0.5 ? 'star' : 'love';
  elem.style.left = Math.random() * 100 + 'vw';
  elem.style.animationDuration = 5 + Math.random() * 5 + 's';
  elem.style.fontSize = (12 + Math.random() * 20) + 'px';
  container.appendChild(elem);
}
