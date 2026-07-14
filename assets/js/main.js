// Mobile overlay menu — shared across all pages
(function () {
  const burger = document.getElementById('hburger');
  const closeBtn = document.getElementById('hburger-close');
  const overlay = document.getElementById('mobile-overlay');
  if (!burger || !overlay) return;

  function openMenu() {
    overlay.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    overlay.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }

  burger.addEventListener('click', () => {
    overlay.classList.contains('open') ? closeMenu() : openMenu();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
  });
})();
