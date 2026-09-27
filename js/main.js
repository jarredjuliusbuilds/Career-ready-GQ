(function () {
  'use strict';

  // ============================================
  // MOBILE HAMBURGER MENU
  // ============================================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  function openMobileMenu() {
    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    mobileMenuOverlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenuOverlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  function toggleMobileMenu() {
    if (mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  // ============================================
  // SCROLL-TO-TOP BUTTON
  // ============================================
  const scrollToTopBtn = document.getElementById('scrollToTop');
  const SCROLL_THRESHOLD = window.innerHeight;

  function handleScrollToTopVisibility() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      scrollToTopBtn.classList.add('is-visible');
    } else {
      scrollToTopBtn.classList.remove('is-visible');
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (scrollToTopBtn) {
    window.addEventListener('scroll', handleScrollToTopVisibility, { passive: true });
    scrollToTopBtn.addEventListener('click', scrollToTop);
  }

  // ============================================
  // FAQ ACCORDION
  // ============================================
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');
    const icon = item.querySelector('.faq__icon');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      item.classList.toggle('is-open');
      question.setAttribute('aria-expanded', !isOpen);
      answer.style.maxHeight = isOpen ? '0' : answer.scrollHeight + 'px';
      if (icon) {
        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    });
  });

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ============================================
  // SCROLL PROGRESS BAR
  // ============================================
  const progressBar = document.getElementById('scrollProgress');

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    if (progressBar) {
      progressBar.style.width = `${scrollPercent * 100}%`;
    }
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // ============================================
  // FLOATING WHATSAPP BUTTON - ensure it stacks above scroll-to-top
  // ============================================
  // Handled via CSS z-index layering
})();