import crearNota from "./agregar.mjs";
import removerNota from "./delete.mjs";
import getData from "./getData.mjs";


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

  // //* Funcionalidad remover nota
  let removerBtn = document.getElementById("eliminar");
  removerBtn.addEventListener("click", removerNota());
}

let agregarBtn = document.getElementById("agregar");

agregarBtn.addEventListener("click", () => crearNota())

export {
  getData
}