/* ============================================================
   particles.js — Floating emoji particles (hearts, flowers, etc.)
   ============================================================ */

(function () {
  // 💡 EDIT: Tambah atau kurangi emoji partikel sesukamu
  const EMOJIS = ['💗', '🌸', '💕', '🌹', '✨', '💫', '🌷', '💖', '🎀', '🌺'];
  const TOTAL  = 22;  // jumlah partikel
  const container = document.getElementById('particles-container');

  function createParticle() {
    const el = document.createElement('span');
    el.classList.add('particle');
    el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

    const size     = 0.9 + Math.random() * 1.2;
    const left     = Math.random() * 100;
    const duration = 8 + Math.random() * 12;
    const delay    = Math.random() * 10;

    el.style.cssText = `
      left: ${left}%;
      font-size: ${size}rem;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(el);
  }

  for (let i = 0; i < TOTAL; i++) createParticle();
})();
