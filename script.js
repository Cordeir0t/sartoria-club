// Aplica a animação de fade-in
window.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('show');
    }, i * 300);
  });
});

// Efeito hover dourado suave no header
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#d4af37';
  });
  link.addEventListener('mouseleave', () => {
    link.style.color = '#eee';
  });
});

// Animações nos cartões quando aparecem na tela
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(40px)';
  observer.observe(card);
});
