// Animaciones on scroll sencillas
(function() {
  const els = document.querySelectorAll('[data-animate]');
  const onScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      const delay = el.getAttribute('data-animate-delay');
      if (rect.top < triggerBottom) {
        if (delay) {
          el.style.setProperty('--d', delay + 'ms');
        }
        el.classList.add('animated');
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);
})();

// Back to top
(function() {
  const btn = document.querySelector('.back-to-top');
  if(!btn) return;
  const toggle = () => {
    if (window.scrollY > 400) btn.classList.add('show'); else btn.classList.remove('show');
  };
  window.addEventListener('scroll', toggle, { passive: true });
  window.addEventListener('load', toggle);
})();

// Año dinámico
(function(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

