function reiniciarDatos() {
  localStorage.removeItem("notas");

  let contenido = document.querySelector(".contenido");
  contenido.innerHTML = `<p id="desc">Notes created: <span id="contador"></span></p>`
}