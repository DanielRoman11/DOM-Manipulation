import crearNota from "./agregar.mjs";
import removerNota from "./delete.mjs";
import getData from "./getData.mjs";


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
let removerBtn = document.getElementById("eliminar");

agregarBtn.addEventListener("click", () => crearNota())

if(removerBtn){
  let datos = JSON.parse(localStorage.getItem("notas"));
  removerBtn.addEventListener("click", removerNota());
}

export {
  getData
}