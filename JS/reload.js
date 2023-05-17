function reiniciarDatos() {
  localStorage.removeItem("notas");

  let contenido = document.querySelector(".contenido");
  contenido.innerHTML = `<p id="desc">Tarjetas añadidas: <span id="contador"></span></p>`
}