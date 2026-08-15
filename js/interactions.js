/* ════════════════════════════════════════
   FEATURE DETECTION
   Only activate rich cursor/tilt effects on
   devices with a fine pointer (mouse/trackpad)
════════════════════════════════════════ */
const HAS_FINE_POINTER = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const PREFERS_REDUCED  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════ */
function initCustomCursor() {
  if (!HAS_FINE_POINTER || PREFERS_REDUCED) return;

  document.body.classList.add('has-cursor');

  const dot   = document.getElementById('cursor-dot');
  const ring  = document.getElementById('cursor-ring');

  // Create a floating label element for data-cursor="view" hints
  const label = document.createElement('div');
  label.id = 'cursor-label';
  document.body.appendChild(label);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX, ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    label.style.transform = `translate(${mouseX}px, ${mouseY + 42}px) translate(-50%, -50%)`;
  });

  // Smooth-follow loop for the ring (slight lag = premium feel)
  function loop() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Hover states
  const hoverables = 'a, button, [role="button"], input, textarea';
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest(hoverables);
    if (!target) return;

    if (target.dataset.cursor === 'view') {
      ring.classList.add('view');
      label.textContent = 'View';
      label.classList.add('visible');
    } else {
      ring.classList.add('hover');
      dot.classList.add('hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest(hoverables);
    if (!target) return;
    ring.classList.remove('hover', 'view');
    dot.classList.remove('hover', 'view');
    label.classList.remove('visible');
  });

  document.addEventListener('mousedown', () => ring.classList.add('pressed'));
  document.addEventListener('mouseup',   () => ring.classList.remove('pressed'));

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '';
    ring.style.opacity = '';
  });
}

/* ════════════════════════════════════════
   MAGNETIC BUTTONS
   Elements with [data-magnetic] gently pull
   toward the cursor within a radius.
════════════════════════════════════════ */
function initMagneticButtons() {
  if (!HAS_FINE_POINTER || PREFERS_REDUCED) return;

  const els = document.querySelectorAll('[data-magnetic]');
  const STRENGTH = 0.35;

  els.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${relX * STRENGTH}px, ${relY * STRENGTH}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
}

/* ════════════════════════════════════════
   HERO PHOTO TILT + SHINE POSITION
════════════════════════════════════════ */
function initPhotoTilt() {
  if (!HAS_FINE_POINTER || PREFERS_REDUCED) return;

  const photo = document.getElementById('hero-photo-tilt');
  if (!photo) return;

  const MAX_TILT = 7;

  photo.addEventListener('mousemove', (e) => {
    const rect = photo.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const tiltX = (py - 0.5) * -MAX_TILT * 2;
    const tiltY = (px - 0.5) * MAX_TILT * 2;

    photo.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    photo.style.setProperty('--mx', `${px * 100}%`);
    photo.style.setProperty('--my', `${py * 100}%`);
  });

  photo.addEventListener('mouseleave', () => {
    photo.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
  });
}

/* ════════════════════════════════════════
   SCROLL PROGRESS BAR
════════════════════════════════════════ */
function initScrollProgress() {
  const fill = document.getElementById('scroll-progress-fill');
  if (!fill) return;

  function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    fill.style.width = pct + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ════════════════════════════════════════
   SUBTLE PARALLAX ON HERO HEADLINE
════════════════════════════════════════ */
function initHeroParallax() {
  if (PREFERS_REDUCED) return;

  const headline = document.getElementById('hero-headline');
  const badge    = document.getElementById('hero-badge');
  if (!headline) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > window.innerHeight) return; // stop once hero is offscreen
    const shift = y * 0.15;
    const fade  = Math.max(0, 1 - y / (window.innerHeight * 0.7));
    headline.style.transform = `translateY(${shift}px)`;
    headline.style.opacity = fade;
    if (badge) badge.style.opacity = fade;
  }, { passive: true });
}

/* ════════════════════════════════════════
   BOOT
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initMagneticButtons();
  initPhotoTilt();
  initScrollProgress();
  initHeroParallax();
});

/* Re-init magnetic buttons after language re-render
   (data.js content swap keeps same elements/ids, so this
   is safe to call once — but exposed globally in case
   main.js wants to re-bind after DOM changes) */
window.__reinitInteractions = function () {
  initMagneticButtons();
};
