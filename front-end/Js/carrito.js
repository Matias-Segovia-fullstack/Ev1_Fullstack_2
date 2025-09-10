function agregarAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const producto = carrito.find(item => item.nombre === nombre);
  if (producto) {
    producto.cantidad++;
    producto.precioTotal = producto.cantidad * producto.precioUnitario;
  } else {
    carrito.push({
      nombre,
      cantidad: 1,
      precioUnitario: precio,
      precioTotal: precio
    });
  }
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito(); // <-- Actualiza el carrito y el total en tiempo real
}

function modificarCantidad(index, nuevaCantidad) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito[index].cantidad = parseInt(nuevaCantidad);
  carrito[index].precioTotal = carrito[index].cantidad * carrito[index].precioUnitario;
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

function eliminarProducto(index) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

function mostrarTotal() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  let total = carrito.reduce((sum, item) => sum + item.precioTotal, 0);
  var totalSpan = document.getElementById('total-compra');
  if (totalSpan) {
    totalSpan.textContent = carrito.length > 0 ? `Total de la compra: $${total}` : '';
  }
}

function mostrarCarrito() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const div = document.getElementById('carrito');
  if (carrito.length === 0) {
    div.innerHTML = "<p>El carrito está vacío.</p>";
    mostrarTotal();
    return;
  }
  div.innerHTML = "";
  carrito.forEach((item, index) => {
    div.innerHTML += `
      <div>
        <span>${item.nombre}</span>
        <span>
          Cantidad: <input type="number" value="${item.cantidad}" min="1" onchange="modificarCantidadYMostrar(${index}, this.value)">
        </span>
        <span>Precio: $${item.precioTotal}</span>
        <button onclick="eliminarProductoYMostrar(${index})">Eliminar</button>
      </div>
    `;
  });
  mostrarTotal(); // <-- Siempre actualiza el total cuando se actualiza el carrito
}

function modificarCantidadYMostrar(index, nuevaCantidad) {
  modificarCantidad(index, nuevaCantidad);
}

function eliminarProductoYMostrar(index) {
  eliminarProducto(index);
}

// Mostrar el carrito al cargar la página
mostrarCarrito();