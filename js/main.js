// ─── CUSTOM CURSOR ───────────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .portfolio-item, .service-card, .stat-box, .palette-swatch, .contact-link-item').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

// ─── NAV SCROLL ──────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── SCROLL REVEAL ───────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── PORTFOLIO BAR PLACEHOLDERS ──────────────────────────────
function buildBars(id, count, minH, maxH) {
  const c = document.getElementById(id);
  if (!c) return;
  for (let i = 0; i < count; i++) {
    const b = document.createElement('div');
    b.className = 'port-bar';
    const h = Math.random() * (maxH - minH) + minH;
    const delay = Math.random() * 2;
    const dur = 1.5 + Math.random() * 2;
    b.style.cssText = `height:${h}px; animation-delay:${delay}s; animation-duration:${dur}s;`;
    c.appendChild(b);
  }
}

['bars1','bars2','bars3','bars4','bars5','bars6'].forEach((id,i) => buildBars(id, 28 + i*2, 20, 60));

// ─── ABOUT BARCODE LINES ─────────────────────────────────────
const aboutCont = document.getElementById('about-bars');
if (aboutCont) {
  for (let i = 0; i < 40; i++) {
    const line = document.createElement('div');
    line.className = 'about-barcode-line';
    const w = Math.random() * 200 + 80;
    const delay = Math.random() * 4;
    const dur = 2 + Math.random() * 3;
    line.style.cssText = `width:${w}px; animation-delay:${delay}s; animation-duration:${dur}s;`;
    aboutCont.appendChild(line);
  }
}

// ─── PORTFOLIO VIDEO: HOVER PLAY / PAUSE ─────────────────────
document.querySelectorAll('.portfolio-item').forEach(item => {
  const video = item.querySelector('.port-video');
  if (!video) return;

  item.addEventListener('mouseenter', () => {
    video.play().catch(() => {}); // catches NotAllowedError silently if no src yet
  });
  item.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});
