let contador = 1;
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
  let html = `<div class="caja" id="tarjeta${contador}">
  <h4 class="id">${contador}</h4>
  <h3>${titulo.value}</h3>
  <hr />
  <p>${descripcion.value}</p>
  </div>`;
  titulo.value = ""
  descripcion.value = ""
  span.innerText = contador

  desc.insertAdjacentHTML("afterend", html);
  return contador++;
}


