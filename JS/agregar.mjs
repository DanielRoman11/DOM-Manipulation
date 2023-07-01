import { getData } from "./index.mjs";

const crearNota = async() =>{
  //* Take values from the form
  const titulo = document.getElementById("titulo");
  const descripcion = document.getElementById("descripcion");

  //* Obtain localstorage data
  const datos = await JSON.parse(localStorage.getItem("notas"));
  
  //* Create id
  let id = 1;

  //* Check form errors
  let errores = document.getElementById("box-error")
  if(titulo.value === "" || descripcion.value === ""){
    return errores.innerHTML = `
    <div class="error">All fields are required</div>
    `
  }
  //* Remove errors
  if(errores){
    errores.innerText = ""
  }

  //? See if there is existing data
  if(!datos){
    //* Create an object [ nota ]
    const nota = {
    id,
    titulo: titulo.value,
    descripcion: descripcion.value
    }

    //* Create an empty array and insert the note you created.
    const notas = [];
    notas.push(nota);
    
    //* Insert the array in localstorage an object in localstorage
    localStorage.setItem("notas", JSON.stringify(notas));
    
    //* Show new note
    const desc = document.getElementById("desc"); //? Elemento donde se insertarán las notas
    
    //* Get data
    const datos = await JSON.parse(localStorage.getItem("notas"));
    const size = Object.keys(datos).length - 1 //? Tamaño del objeto
    
    //* Show inserted data
    document.getElementById("contador").innerText = id

    //* Insert element in the list:
    desc.insertAdjacentHTML("afterend", getData(datos[size]).join(" "));
  } else {
    //* Get localstorage data
    let datos = await JSON.parse(localStorage.getItem("notas"));
    
    //* Create an id from the Object size
    const lastNote = Array.from(
      document.querySelectorAll('.caja')
    ).pop();
    console.log(lastNote.firstElementChild.firstElementChild.innerText)
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
    const size = Object.keys(datos).length - 1 //? Tamaño del objeto

    //* Show number of inserted notes
    document.getElementById("contador").innerText = Object.keys(datos).length

    //* Insert element in the list:
    document.getElementById(`tarjeta${size}`).insertAdjacentHTML("afterend", getData(datos[size]).join(" "));
  }
  //* Reset fields
  titulo.value = ""
  descripcion.value= ""
}

export default crearNota;