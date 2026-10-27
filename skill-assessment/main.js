// ============================================
// SKILLPROBE — MAIN.JS
// Phase-2: Shared JS — Navigation, Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ===== HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }

  // ===== ACTIVE NAV LINK =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // ===== SCROLL REVEAL =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .cat-card, .step, .service-card, .team-card, .stat-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });

  // ===== DYNAMIC YEAR in footer =====
  document.querySelectorAll('.footer-bottom').forEach(el => {
    el.textContent = el.textContent.replace('2026', new Date().getFullYear() || '2026');
  });

});
