// Menú hamburguesa
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.navbar__menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Tema día/noche
const tema = document.getElementById('boton-tema');
tema.addEventListener('click', () => {
  document.body.classList.toggle('modo-noche');
  document.body.classList.toggle('modo-dia');
  tema.textContent = document.body.classList.contains('modo-noche') ? '☀️ Día' : '🌙 Noche';
});

// Carrusel
const carrusel = document.getElementById('carrusel');
document.getElementById('prev').addEventListener('click', () => {
  carrusel.scrollBy({ left: -300, behavior: 'smooth' });
});
document.getElementById('next').addEventListener('click', () => {
  carrusel.scrollBy({ left: 300, behavior: 'smooth' });
});