document.addEventListener("DOMContentLoaded", function(){
      // Inicializa acciones según estado
      renderAccionBotones();

      // Filtro de pedidos
      const filtro = document.getElementById("filtroEstado");
      filtro.addEventListener("change", function () {
        const estado = filtro.value;
        document.querySelectorAll('.pedido-row').forEach(row => {
          if (estado === "todos" || row.dataset.estado === estado) {
            row.style.display = "";
          } else {
            row.style.display = "none";
          }
        });
      });

      // Delegación de eventos para botones de acciones
      document.querySelector('.usuarios-table tbody').addEventListener('click', function(e) {
        // Cerrar pedido
        if (e.target.closest('.btn-cerrar-pedido')) {
          const row = e.target.closest('tr');
          // Cambiar estado visualmente
          row.dataset.estado = "completado";
          const estadoSpan = row.querySelector('.estado-pedido');
          estadoSpan.textContent = "Completado";
          estadoSpan.classList.remove('estado-pendiente');
          estadoSpan.classList.add('estado-completado');
          // Cambiar acciones a "Ver"
          const clo = e.target.closest('.cerrar');
          row.querySelector('.acciones').innerHTML = '';
        }
        // Anular pedido
        if (e.target.closest('.btn-anular-pedido')) {
          const row = e.target.closest('tr');
          row.remove();
        }
      });

      // Función para renderizar botones según estado
      function renderAccionBotones() {
        document.querySelectorAll('.pedido-row').forEach(row => {
          const accionesTd = row.querySelector('.acciones');
          const estado = row.dataset.estado;
          if (accionesTd) {
            if (estado === "pendiente") {
              accionesTd.innerHTML = `
                <button class="btn-cerrar-pedido"><i class="bi bi-check-circle"></i> Cerrar</button>
                <button class="btn-anular-pedido"><i class="bi bi-x-circle"></i> Anular</button>`;
            }
          }
        });
      }
    });