/* ============================================================
   main.js — Interaktivitas: loading, scroll reveal, musik, fireworks
   ============================================================ */

/* ─── LOADING SCREEN ─── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 1800);
});

/* ─── SCROLL REVEAL ─── */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

/* ─── SMOOTH SCROLL HELPER ─── */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function nextSection() {
  scrollToSection('section-gallery');
}

function restartJourney() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── MUSIC BUTTON ─── */
const musicBtn  = document.getElementById('music-btn');
const bgMusic   = document.getElementById('bg-music');

musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
    musicBtn.textContent = '🎶';
    musicBtn.classList.add('playing');
  } else {
    bgMusic.pause();
    musicBtn.textContent = '🎵';
    musicBtn.classList.remove('playing');
  }
});

/* ─── FIREWORKS (CSS Particles) ─── */
function createFireworks() {
  const container = document.getElementById('fireworks');
  if (!container) return;

  const colors = ['#ff6b9d', '#ffd6e7', '#f5c842', '#ff3d7f', '#fff', '#a78bfa'];

  setInterval(() => {
    const burst = document.createElement('div');
    burst.style.cssText = `
      position: absolute;
      left: ${10 + Math.random() * 80}%;
      top:  ${10 + Math.random() * 60}%;
      font-size: ${1 + Math.random()}rem;
      animation: floatUp ${1.5 + Math.random()}s ease-out forwards;
      opacity: 1;
      pointer-events: none;
    `;
    const sparks = ['✨','💥','🌟','⭐','💫','🎇'];
    burst.textContent = sparks[Math.floor(Math.random() * sparks.length)];
    container.appendChild(burst);
    setTimeout(() => burst.remove(), 2500);
  }, 600);
}

/* Start fireworks when closing section is visible */
const closingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      createFireworks();
      closingObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

const closingSection = document.getElementById('section-closing');
if (closingSection) closingObserver.observe(closingSection);

/* ─── GALLERY: click to zoom (lightbox sederhana) ─── */
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (!img) return;

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 9000;
      background: rgba(0,0,0,0.85);
      display: flex; align-items: center; justify-content: center;
      cursor: zoom-out; padding: 20px;
      animation: fadeIn 0.25s ease;
    `;
    const clone = img.cloneNode();
    clone.style.cssText = `
      max-width: 90vw; max-height: 90vh;
      object-fit: contain; border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    `;
    overlay.appendChild(clone);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
