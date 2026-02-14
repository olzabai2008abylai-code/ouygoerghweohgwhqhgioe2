// interaction + intro animation
console.log('script.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const v = document.querySelector('.valentines');
  if (!v) return;

  // play intro shortly after load
  setTimeout(() => v.classList.add('play'), 250);

  // replay animation on click/tap
  v.addEventListener('click', () => {
    v.classList.remove('play');
    void v.offsetWidth; // reflow
    v.classList.add('play');
  });

  // keyboard accessibility: Enter / Space to replay
  v.setAttribute('tabindex', '0');
  v.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      v.classList.remove('play');
      void v.offsetWidth;
      v.classList.add('play');
    }
  });
});
