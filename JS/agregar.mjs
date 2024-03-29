import removerNota from "./delete.mjs";
import { getData, getDatos, getSize, id } from "./index.mjs";

const crearNota = async() =>{
  //* Take values from the form
  const titulo = document.getElementById("titulo");
  const descripcion = document.getElementById("descripcion");

  //* Obtain localstorage data
  let datos = await JSON.parse(localStorage.getItem("notas"));
  
  //* Create id
  let actualId = id + 1;
  //* Check form errors
  let errores = document.getElementById("box-error")
  if(titulo.value === "" || descripcion.value === ""){
    return errores.innerHTML = `
    <div class="error">All fields are required</div>
    `
  }
  //* Remove errors
  if(errores) errores.innerText = "";

  //? See if there is existing data
  if(!datos){
    //* Create an object [ nota ]
    const nota = {
    id: actualId++,
    titulo: titulo.value,
    descripcion: descripcion.value
    }

    //* Create an empty array and insert the note you created.
    const notas = [];
    notas.push(nota);
    
    //* Insert the array in localstorage an object in localstorage
    localStorage.setItem("notas", JSON.stringify(notas));

    //* Show inserted data
    document.getElementById("contador").innerText = 1
    
    //* Insert element in the list:
    const listaNotas = document.getElementById("notesList"); //? Elemento donde se insertarán las notas

    const content = getData(nota)[0]

    listaNotas.insertAdjacentHTML("beforeend", content);
  } else {
    //* Get localstorage data
    let datos = await JSON.parse(localStorage.getItem("notas"));
    
    //* Create an id from the Object size
    const lastNote = Array.from(
      document.querySelectorAll('.caja')
    ).pop();
    // console.log(lastNote.firstElementChild.firstElementChild.innerText)
    let id = Number(lastNote.firstElementChild.firstElementChild.innerText) + 1
    
    //* Create an object [ nota ]
    const nota = {
      id,
      titulo: titulo.value,
      descripcion: descripcion.value
    }
    
    //* Modification of the id in notes
    nota.id = id++
    
    //* Creating a copy of the data
    const notas = [...datos];
    // console.log(notas);
  
    //* Create an empty array and insert the note you created.
    notas.push(nota);
  
    //* Modify the object by adding the new note
    localStorage.setItem("notas", JSON.stringify(notas));
  
    //* Refresh data
    datos = await JSON.parse(localStorage.getItem("notas"));

    let size = Object.keys(datos).length - 1 //? Tamaño del objeto
    console.log(datos[size]);

    //* Show number of inserted notes
    document.getElementById("contador").innerText = getSize(datos);

    //* Insert element in the list:
    const newElem = await datos[size];
    console.log(newElem);

    const listaNotas = document.getElementById("notesList");

    listaNotas.insertAdjacentHTML("beforeend", getData(newElem).join(" "));
    
    const notaElem = document.getElementById(`tarjeta${nota.id}`).lastElementChild.firstElementChild;

    notaElem.addEventListener("click", removerNota());
    // console.log(notaElem);

  }
  //* Reset fields
  titulo.value = ""
  descripcion.value= ""
}

export default crearNota;