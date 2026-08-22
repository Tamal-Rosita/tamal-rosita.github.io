/* main.js – Tamal Rosita */
(function () {
  'use strict';

  // ── Progress bar animate on load ─────────────────────────────────────────
  const progressBar = document.getElementById('progressBar');
  const progressLabel = document.getElementById('progressLabel');

  if (progressBar) {
    setTimeout(() => { progressBar.style.width = '25%'; }, 400);
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

  // ── Footer Date ──────────────────────────────────────────────────────────
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  // ── Mobile Nav Toggle ────────────────────────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked (mobile)
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target)) {
        mainNav.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

})();
