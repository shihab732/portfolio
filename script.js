// Subtle, purposeful interactivity only — no gimmicks.

document.addEventListener('DOMContentLoaded', () => {
  // Reveal sections gently as they enter the viewport.
  const sections = document.querySelectorAll('.section, .hero');

  if ('IntersectionObserver' in window) {
    sections.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    sections.forEach((el) => observer.observe(el));
  }
});
