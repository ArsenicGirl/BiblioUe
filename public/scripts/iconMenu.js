      // Agrega un evento clic al botón del dropdown
      document.querySelector('.dropdown-trigger button').addEventListener('click', function () {
        // Obtiene el dropdown
        var dropdown = document.querySelector('.dropdown');
        
        // Alterna la clase 'is-active' para mostrar u ocultar el menú desplegable
        dropdown.classList.toggle('is-active');
    });


