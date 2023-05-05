let contador = 1;
function crearCajon() {
  const desc = document.getElementById("desc");
  const span = document.getElementById("contador");
  span.innerText = contador

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
  let html = `<div class="caja" id="tarjeta${contador + 1}">
  <h3>${titulo.value} -> #${contador}</h3>
  <p>${descripcion.value}</p>
  </div>`;
  titulo.value = ""
  descripcion.value = ""

  desc.insertAdjacentHTML("afterend", html);
  contador++;
}


