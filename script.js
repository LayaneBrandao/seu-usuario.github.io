// Ano dinâmico no footer
document.getElementById('ano').textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Fecha menu ao clicar em um link (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Efeito de digitação no hero
const words = ['Front-end', 'Full-stack', 'Web', 'criativo'];
const typedEl = document.querySelector('.typed');
let wordIndex = 0, charIndex = 0, deleting = false;

function type() {
  const current = words[wordIndex];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 60 : 120);
}
type();
