document.querySelector('.hamburger-menu').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Adicionando um ouvinte para mudanças no tamanho da janela
window.addEventListener('resize', function() {
  if (window.innerWidth > 600) {
      document.querySelector('.nav-links').classList.remove('active');
  }
});
