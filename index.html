// ─── CUSTOM CURSOR (desktop only) ────────────────────────────
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

if (cursor && ring && window.matchMedia('(pointer: fine)').matches) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  document.querySelectorAll(
    'a, button, .portfolio-item, .service-card, .stat-box, .palette-swatch, .contact-link-item, .prod-card, .pt-card, .shop-card'
  ).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });
}

// ─── NAV SCROLL ──────────────────────────────────────────────
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ─── HAMBURGER MENU ──────────────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  const toggle = () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggle);

  mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ─── SCROLL REVEAL ───────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── PORTFOLIO BAR PLACEHOLDERS ──────────────────────────────
function buildBars(id, count, minH, maxH) {
  const c = document.getElementById(id);
  if (!c) return;
  for (let i = 0; i < count; i++) {
    const b = document.createElement('div');
    b.className = 'port-bar';
    const h     = Math.random() * (maxH - minH) + minH;
    const delay = Math.random() * 2;
    const dur   = 1.5 + Math.random() * 2;
    b.style.cssText = `height:${h}px; animation-delay:${delay}s; animation-duration:${dur}s;`;
    c.appendChild(b);
  }
}
['bars1','bars2','bars3','bars4','bars5','bars6'].forEach((id, i) => buildBars(id, 28 + i * 2, 20, 60));

// ─── ABOUT BARCODE LINES ─────────────────────────────────────
const aboutCont = document.getElementById('about-bars');
if (aboutCont) {
  for (let i = 0; i < 40; i++) {
    const line = document.createElement('div');
    line.className = 'about-barcode-line';
    const w     = Math.random() * 200 + 80;
    const delay = Math.random() * 4;
    const dur   = 2 + Math.random() * 3;
    line.style.cssText = `width:${w}px; animation-delay:${delay}s; animation-duration:${dur}s;`;
    aboutCont.appendChild(line);
  }
}

// ─── PORTFOLIO VIDEO: HOVER PLAY / PAUSE ─────────────────────
document.querySelectorAll('.portfolio-item').forEach(item => {
  const video = item.querySelector('.port-video');
  if (!video) return;
  item.addEventListener('mouseenter', () => video.play().catch(() => {}));
  item.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
});
