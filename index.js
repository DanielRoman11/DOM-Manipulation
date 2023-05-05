let id = 1;
function crearCajon() {
  const desc = document.getElementById("desc");
  const span = document.getElementById("contador");

  let titulo = document.getElementById("titulo");
  let descripcion = document.getElementById("descripcion");

  if( titulo.value == "" || descripcion.value == ""){
    const boxError = document.getElementById("box-error");
    return boxError.innerHTML = `<div class="error" id="error">
    <p>Todos los campos son obligatorios</p>
  </div>`
  }
  let error = document.getElementById("error");
  if(error){ error.remove() }

  let html = `<div class="caja" id="tarjeta${id}">
  <h4 class="id">${id}</h4>
  <h3>${titulo.value}</h3>
  <hr />
  <p>${descripcion.value}</p>
  <div class="contenedor-icono">
    <a class="texto" id="eliminar">Borrar</a>
    <a class="texto" id="editar">Editar </a>
  </div>
  </div>`;
  titulo.value = ""
  descripcion.value = ""
  span.innerText = id

  desc.insertAdjacentHTML("afterend", html);
  return id++;
}


