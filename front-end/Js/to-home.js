 const loginContainer = document.querySelector('.login-container');

  // Detectamos clics en todo el documento
  document.addEventListener('click', function(event) {
    // Si el clic NO fue dentro del loginContainer
    if (!loginContainer.contains(event.target)) {
      // Redirige al home principal (ajusta la ruta si es necesario)
      window.location.href = 'http://127.0.0.1:3000/html'; 
    }
  });


   const olvideContainer = document.querySelector('.olvide-container');

  // Detectamos clics en todo el documento
  document.addEventListener('click', function(event) {
    // Si el clic NO fue dentro del loginContainer
    if (!olvideContainer.contains(event.target)) {
      // Redirige al home principal (ajusta la ruta si es necesario)
      window.location.href = 'http://127.0.0.1:3000/html'; 
    }
  });