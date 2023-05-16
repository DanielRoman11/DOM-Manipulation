import crearNota from "./agregar.mjs";
import removerNota from "./delete.mjs";

const getData = i =>[`
  <div class="caja" id="tarjeta${i.id}">
    <div class="titleCard">
      <h4 class="id">${i.id}</h4>
      <h3>${i.titulo}</h3>
    </div>
    <p>${i.descripcion}</p>
    <div class="contenedor-icono">
      <a class="texto" onclick="remover(${i.id - 1})" id="eliminar">Borrar</a>
      <a class="texto" id="editar">Editar </a>
    </div>
  </div>`]

let contador = document.getElementById("contador") //? Variable contador

//* Comprobar si existen notas creadas
if(window.localStorage.getItem("notas") !== null){
  //? Tomando los datos de las notas
  let datos = JSON.parse(localStorage.getItem("notas"));

  //? Copiando los datos
  const notas = [...datos];

  //? Iterando cada elemeto y creando su respectiva nota
  const contenido = notas.map(getData).join("");
  
  //? Insertar elementos existentes después del título
  document.getElementById("desc").insertAdjacentHTML("afterend", contenido); 

  //? Cambiando el contador
  document.getElementById("contador").innerText = Object.keys(datos).length;
}


const _getData = {
  getData
};
export { _getData as getData };