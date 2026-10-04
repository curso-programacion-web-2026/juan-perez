document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Modo Oscuro ---
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
  });


  // --- 2. Ajuste del Tamaño de Texto ---
  const btnIncrease = document.getElementById('btn-font-increase');
  const btnDecrease = document.getElementById('btn-font-decrease');
  let currentFontSize = 16; // Tamaño base en px

  btnIncrease.addEventListener('click', () => {
    if (currentFontSize < 22) { // Límite máximo
      currentFontSize += 2;
      document.documentElement.style.setProperty('--font-base-size', `${currentFontSize}px`);
    }
  });

  btnDecrease.addEventListener('click', () => {
    if (currentFontSize > 12) { // Límite mínimo
      currentFontSize -= 2;
      document.documentElement.style.setProperty('--font-base-size', `${currentFontSize}px`);
    }
  });


  // --- 3. Carrusel de Imágenes ---
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Avance automático cada 5 segundos
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);


  // --- 4. Botones "Ver más" ---
  const readMoreBtns = document.querySelectorAll('.btn-read-more');

  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cardBody = btn.parentElement;
      const moreContent = cardBody.querySelector('.more-content');
      
      moreContent.classList.toggle('hidden');
      
      if (moreContent.classList.contains('hidden')) {
        btn.textContent = 'Ver más';
      } else {
        btn.textContent = 'Ver menos';
      }
    });
  });

});