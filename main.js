/* main.js – Tamal Rosita */
(function () {
  'use strict';

  // ── Progress bar animate on load ─────────────────────────────────────────
  const progressBar   = document.getElementById('progressBar');
  const progressLabel = document.getElementById('progressLabel');

  if (progressBar) {
    setTimeout(() => { progressBar.style.width = '45%'; }, 400);
  }

  if (progressLabel) {
    const messages = ['Building...', 'Compiling...', 'Rendering...', 'Almost there...'];
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % messages.length;
      progressLabel.textContent = messages[idx];
    }, 2500);
  }

  // ── Light / Dark Mode Toggle (Disco) ─────────────────────────────────────
  const lamps = document.querySelectorAll('.lamp');
  lamps.forEach(lamp => {
    lamp.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });

})();
