/**
 * VIPUL AJAY SONTAKKE — PORTFOLIO
 * scrolly.js: Lenis smooth scroll + Framer Motion subtle fade/slide on scroll
 */

// --- Lenis Smooth Scroll ---
if (window.Lenis) {
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// --- Optional: Framer Motion micro-animations via Motion for JS ---
// Wraps IntersectionObserver logic already in main.js.
// Adds subtle parallax to hero text on scroll.
(async () => {
  try {
    const { animate, scroll } = await import(
      'https://cdn.jsdelivr.net/npm/motion@11.11.17/+esm'
    );

    // Hero title subtle parallax
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      scroll(
        animate(heroTitle, { transform: ['translateY(0px)', 'translateY(-28px)'] }),
        {
          target: document.getElementById('home'),
          offset: ['start start', 'end start'],
        }
      );
    }

    // Hero bio subtle fade-out on scroll
    const heroBio = document.querySelector('.hero-bio');
    if (heroBio) {
      scroll(
        animate(heroBio, { opacity: [1, 0.4] }),
        {
          target: document.getElementById('home'),
          offset: ['start start', 'end start'],
        }
      );
    }
  } catch {
    // Silently fail — site works fine without Motion
  }
})();
