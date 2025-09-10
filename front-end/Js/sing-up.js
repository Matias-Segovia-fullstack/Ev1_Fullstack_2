// 1. REGIONES Y COMUNAS
const comunasPorRegion = {
  "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
  "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
  "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
  "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
  "Valparaíso": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "San Sebastián", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
  "Metropolitana": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Santiago", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
  "O'Higgins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchigüe", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
  "Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
  "Ñuble": ["Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
  "Biobío": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
  "La Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
  "Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
  "Los Lagos": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo"],
  "Aysén": ["Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
  "Magallanes": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Puerto Edén", "Torres del Paine"]
};

// 2. CARGA DINÁMICA DE COMUNAS
document.getElementById('region').addEventListener('change', function() {
  const comunaSelect = document.getElementById('comuna');
  const region = this.value;
  comunaSelect.innerHTML = '<option value="">Seleccione Comuna</option>';
  if (comunasPorRegion[region]) {
    comunasPorRegion[region].forEach(function(comuna) {
      const opt = document.createElement('option');
      opt.value = comuna;
      opt.textContent = comuna;
      comunaSelect.appendChild(opt);
    });
  }
});

// 3. REGISTRO Y VALIDACIÓN
document.getElementById("form-registro").addEventListener("submit", function(e) {
  e.preventDefault();

  // Obtener valores
  const nombre = document.querySelector('input[placeholder="Nombre Completo"]').value.trim();
  const email = document.querySelector('input[placeholder="Correo electrónico"]').value.trim();
  const email2 = document.querySelector('input[placeholder="Confirme Correo electrónico"]').value.trim();
  const password = document.querySelector('input[placeholder="Contraseña"]').value;
  const password2 = document.querySelector('input[placeholder="Confirme Contraseña"]').value;
  const telefono = document.querySelector('input[placeholder^="Numero"]').value.trim();
  const region = document.getElementById("region").value;
  const comuna = document.getElementById("comuna").value;

  // Obtener elementos de error
  const errorEmail = document.getElementById("error-email");
  const errorEmail2 = document.getElementById("error-email2");
  const errorPassword = document.getElementById("error-password");
  const errorPassword2 = document.getElementById("error-password2");
  const errorEmailNo = document.getElementById("error-email-no");

  // Limpiar mensajes de error
  errorEmail.textContent = "";
  errorEmail2.textContent = "";
  errorPassword.textContent = "";
  errorPassword2.textContent = "";
  errorEmailNo.textContent = "";

  let hayError = false;

  // Validaciones
  if (!nombre || !email || !email2 || !password || !password2 || !region || !comuna) {
    alert("Por favor completa todos los campos obligatorios.");
    return;
  }

  // Validar emails
  const emailRegex = /^([a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com))$/;
  if (!emailRegex.test(email)) {
    errorEmail.textContent = "Correo no válido o dominio no permitido";
    hayError = true;
  }
  if (email !== email2) {
    errorEmail2.textContent = "Los correos electrónicos no coinciden";
    hayError = true;
  }

  // Validar contraseñas
  if (password.length < 4 || password.length > 10) {
    errorPassword.textContent = "La contraseña debe tener entre 4 y 10 caracteres";
    hayError = true;
  }
  if (password !== password2) {
    errorPassword2.textContent = "Las contraseñas no coinciden";
    hayError = true;
  }

  // Validar teléfono (opcional)
  if (telefono && !/^[0-9]{9}$/.test(telefono)) {
    alert("El número de teléfono debe tener 9 dígitos.");
    return;
  }

  // Validar usuario repetido por correo
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  if (usuarios.some(u => u.email === email)) {
    errorEmail.textContent = "El correo ya está registrado";
    hayError = true;
  }

const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector('input[type="email"]').value;
  const errorEmailNo = document.getElementById("error-email-no");

  if (!usuarios.some(u => u.email === email)) {
    errorEmailNo.textContent = "Este correo no está registrado";
  } else {
    errorEmailNo.textContent = "";
  }
});


  // Crear usuario
  const usuario = { nombre, email, password, telefono, region, comuna };
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("¡Usuario registrado con éxito!");

  // Limpiar formulario y comunas
  document.getElementById("form-registro").reset();
  document.getElementById("comuna").innerHTML = '<option value="">Seleccione Comuna</option>';
});

const signUpContainer = document.querySelector('.signup-container');

document.addEventListener('click', function(event) {
    // Si el clic NO fue dentro del loginContainer
    if (!signUpContainer.contains(event.target)) {
      // Redirige al home principal (ajusta la ruta si es necesario)
      window.location.href = 'http://127.0.0.1:3000/html'; 
    }
  });