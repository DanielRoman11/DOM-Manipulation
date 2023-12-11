import crearNota from "./agregar.mjs";
import removerNota from "./delete.mjs";
import getData from "./getData.mjs";

export let id = 0;

export async function getDatos(){
  try {
    return await JSON.parse(localStorage.getItem("notas"));
  } catch (error) {
    throw new Error(error);
  }
}

export function getSize(datos) {
  if(datos !== undefined && datos !== null)
    return Object.keys(datos).length
  else return "vacio"
}

//* Comprobar si existen notas creadas
if(window.localStorage.getItem("notas") !== null){
  //? Tomando los datos de las notas
  let datos = JSON.parse(localStorage.getItem("notas"));

  //? Copiando los datos
  const notas = [...datos];

  //? Iterando cada elemeto y creando su respectiva nota
  const contenido = notas.map(getData).join("");
  
  //? Insertar elementos existentes después del título
  const contenedor = document.getElementById("notesList");

  contenedor.insertAdjacentHTML("beforeend", contenido);

  // document.getElementById("desc").insertAdjacentHTML("afterend", contenido); 

  //? Cambiando el contador
  document.getElementById("contador").innerText = Object.keys(datos).length;

}

let agregarBtn = document.getElementById("agregar");
let removerBtn = document.getElementById("eliminar");
let editBtn = document.getElementById("editar");

agregarBtn.addEventListener("click", () => crearNota())

if(removerBtn){
  let datos = JSON.parse(localStorage.getItem("notas"));
  removerBtn.addEventListener("click", removerNota());
}
if(editBtn){
  editBtn.addEventListener("click", ()=>{
    alert("Currently under development👨‍💻")
  })
}

export { getData }