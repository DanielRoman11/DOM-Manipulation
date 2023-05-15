function reiniciarDatos() {
  localStorage.clear();
  let string = `<p id="desc">Tarjetas añadidas: <span id="contador"></span></p>`;
  let contenido = document.getElementById("contenido");
  return contenido.innerHTML = string;
}

