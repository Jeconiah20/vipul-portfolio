/**
 * VIPUL AJAY SONTAKKE — PORTFOLIO
 * Main JS: Custom cursor, navbar, mobile nav, scroll-spy, contact form, back-to-top
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initNavbar();
  initMobileNav();
  initScrollSpy();
  initContactForm();
  initBackToTop();
  initScrollAnimations();
});

/* ----------------------------------------------------------------
   1. CUSTOM BLENDING DOT CURSOR
   ---------------------------------------------------------------- */
function initCustomCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  if (!window.matchMedia('(pointer: fine)').matches) {
    dot.style.display = 'none';
    ring.style.display = 'none';
    return;
  }

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
  });

  function tick() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  const targets = document.querySelectorAll('a, button, input, textarea, .work-card, .cred-card, .skill-group, .highlight-item');
  targets.forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });
}

/* ----------------------------------------------------------------
   2. NAVBAR: glass on scroll
   ---------------------------------------------------------------- */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ----------------------------------------------------------------
   3. MOBILE NAV TOGGLE
   ---------------------------------------------------------------- */
function initMobileNav() {
  const btn = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

/* ----------------------------------------------------------------
   4. SCROLL SPY — active nav link
   ---------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  if (!sections.length || !links.length) return;

  const map = {};
  links.forEach((l) => {
    const target = l.getAttribute('href').replace('#', '');
    map[target] = l;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const id = e.target.id;
          // map 'home' to 'about' in nav since hero is #home
          if (map[id]) map[id].classList.add('active');
        }
      });
    },
    { threshold: 0.35 }
  );
  sections.forEach((s) => observer.observe(s));
}

/* ----------------------------------------------------------------
   5. SCROLL ANIMATIONS (IntersectionObserver)
   ---------------------------------------------------------------- */
function initScrollAnimations() {
  const els = document.querySelectorAll('.animate-on-scroll');
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          // stagger within parent
          const siblings = e.target.parentElement.querySelectorAll('.animate-on-scroll');
          let idx = 0;
          siblings.forEach((s, si) => { if (s === e.target) idx = si; });
          e.target.style.transitionDelay = `${idx * 0.07}s`;
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
}

/* ----------------------------------------------------------------
   6. CONTACT FORM (mailto fallback)
   ---------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = form.querySelector('[name="name"]')?.value.trim() || '';
    const email   = form.querySelector('[name="email"]')?.value.trim() || '';
    const message = form.querySelector('[name="message"]')?.value.trim() || '';

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body    = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    const gmailURL = `https://mail.google.com/mail/?view=cm&to=sontakke.vipul@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailURL, '_blank', 'noopener,noreferrer');

    feedback.textContent = 'Opening Gmail — your message is pre-filled and ready to send.';
    feedback.classList.add('visible');
    form.reset();
    setTimeout(() => feedback.classList.remove('visible'), 6000);
  });
}

/* ----------------------------------------------------------------
   7. BACK TO TOP
   ---------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
