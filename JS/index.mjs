import crearNota from "./agregar.mjs";
import removerNota from "./delete.mjs";

function getData(i) {
  return [`
  <div class="caja" id="tarjeta${i.id}">
    <div class="titleCard">
      <h4 class="id">${i.id}</h4>
      <h3>${i.titulo}</h3>
    </div>
    <p>${i.descripcion}</p>
    <div class="contenedor-icono">
      <a class="texto" id="remover">Borrar</a>
      <a class="texto" id="editar">Editar </a>
    </div>
  </div>`];
}

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

let agregarBtn = document.getElementById("agregar");
let removerBtn = document.getElementById("remover");

agregarBtn.addEventListener("click", () => crearNota())
// removerNota.addEventListener("click", removerBtn())

export {
  getData
}