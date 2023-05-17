function getData(i) {
  return [`
  <div class="caja" id="tarjeta${i.id}">
    <div class="titleCard">
      <h4 class="id">${i.id}</h4>
      <h3>${i.titulo}</h3>
    </div>
    <p>${i.descripcion}</p>
    <div class="contenedor-icono">
      <a class="texto" id="eliminar">Borrar</a>
      <a class="texto" id="editar">Editar</a>
    </div>
  </div>`];
}

export default getData;